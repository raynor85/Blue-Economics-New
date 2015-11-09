/**
 * Created by john on 6/20/15.
 */

'use strict';

var $ = require('jquery');

/**

 USAGE:

 blueEconomics.industries.get();
 blueEconomics.industries.filter({ text: '', cached: false });

 blueEconomics.jobs.get();
 .. etc

 Special cases (these methods do not exist elsewhere)

 blueEconomics.workExperience.getById(id)
 blueEconomics.questions.ask(question)
 blueEconomics.questions.answersById(id)
 blueEconomics.questions.search(query)


 All methods return jquery Deferred promises:

 blueEconomics.workExperience.getById(12345)
 .then(function(data) {
           // do stuff
        });


 blueEconomics.industries.get()
 .done(function(data) {
            // do something with the data
        })
 .fail(function(error) {
            console.log('Something bad happened!');
        });

 */
var blueEconomics = (function ($) {

    /**
     @description    Got this from https://github.com/jaz303/promise-debounce/blob/master/index.js
     Given a function that returns a promise, this returns a function which will return
     the existing promise until it has been resolved, if called several times in succession.
     */
    function promiseDebounce(fn, ctx) {
        var pending = null;
        return function () {
            if (pending) return pending;
            pending = fn.apply(ctx, arguments);
            pending.then(function () {
                pending = null;
            });
            return pending;
        };
    }

    function deferredRequest(self, deferred, url, args) {
        args = $.extend({ type: 'GET', dataType: 'json' }, args);

        $.ajax(url, {
            type    : args.type,
            dataType: args.dataType
        })
            .done(function (data) {
                self.data = data;
                deferred.resolve(data);
            })
            .fail(function (error) {
                deferred.reject(error);
            });
    }

    /**
     @description    Base class for queries, defines get() and filter() methods that are common to everything
     */
    function BaseQuery(url, args) {
        var defaults = {
            // right now there are no defaults
        };
        args         = $.extend(defaults, args || {});

        this.url  = url || '/';
        this.data = []; // store returned data here, use if requested
    }

    /**
     @description    Makes a GET request to this.url and returns the result.
     @param          {object} args
     .cached - true if the request should use cached data if available, false if it should always make a request to the server
     @returns        {Promise} resolved with JSON data from the ajax call.
     */
    BaseQuery.prototype.get = function (args) {
        args = args || {};

        var cached   = !!args.cached,
            deferred = $.Deferred();

        if (cached && this.data.length > 0) {
            deferred.resolve(this.data);

        } else {
            deferredRequest(this, deferred, this.url, {});
        }

        return deferred.promise();
    };

    /**
     @description    Calls BaseQuery.prototype.get() and then filters the results by the value of args.text.
     By default, the item itself is used to compare against filterText, but if args.filterSelector is specified
     it will use that to get the value to compare against instead.
     @param          {Object} args
     .cached - true to use cached data, false to make a request to the server each time
     .text - the text to filter on
     .filterSelector - a function which returns the appropriate value out of the data item to compare against args.text
     @returns        {Promise} resolved when the data has been returned and filtered.
     */
    BaseQuery.prototype.filter = function (args) {
        args = args || {};

        var filterText     = (args.text || '').toLowerCase(),
            deferred       = this.get(args),
            filterSelector = args.filterSelector || getFilterSelector;

        var filterDeferred = deferred.pipe(function (data) {
            var filtered = data.filter(function (i) {
                var compareText = (filterSelector(i) || '').toLowerCase();
                return compareText.indexOf(filterText) >= 0;
            });
            return filtered;
        });

        return filterDeferred.promise();

        function getFilterSelector(item) {
            return item;
        }    // override this in case the data is something besides a list of strings
    };


    /**
     @description    GET /industries
     */
    function Industries() {
        BaseQuery.call(this, '/industries', {});
    }

    Industries.prototype = Object.create(BaseQuery.prototype);


    /**
     @description    GET /jobs
     */
    function Jobs() {
        BaseQuery.call(this, '/jobs', {});
    }

    Jobs.prototype = Object.create(BaseQuery.prototype);


    /**
     @description    GET /workexperience
     GET /workexperience/:id
     */
    function WorkExperience() {
        BaseQuery.call(this, '/workexperience', {});
    }

    WorkExperience.prototype = Object.create(BaseQuery.prototype);

    WorkExperience.prototype.getById = function (id) {
        var url      = this.url + '/' + id,
            deferred = $.Deferred();

        deferredRequest(this, deferred, url, {});

        var piped = deferred.pipe(function (data) {
            if (data && data.length === 1) {
                return data[0];
            } else {
                return null;
            }
        });

        return piped.promise();
    };


    /**
     @description    POST /occupations (//todo: get data structure shape)
     */
    function Occupations() {
        BaseQuery.call(this, '/occupations', {});
    }

    Occupations.prototype = Object.create(BaseQuery.prototype);     // override the get() method since it's a POST here

    /**
     @description    POST to /occupations to do a query by education levels
     @param          {Array} educationLevels - a list of strings?
     */
    Occupations.prototype.get = function (educationLevels) {
        //TODO: what format does the server side expect?
        educationLevels = educationLevels || [];
        var deferred    = $.Deferred();

        deferredRequest(this, deferred, this.url, { type: 'POST', data: educationLevels });

        return deferred.promise();
    };


    /**
     @description    GET /questions
     POST /questions  { name, email, text, job }
     GET /questions/search/:searchQuery
     GET /questions/:id/answers
     */
    function Questions() {
        BaseQuery.call(this, '/questions', {});
    }

    Questions.prototype = Object.create(BaseQuery.prototype);

    /**
     @description    Makes a GET request to /questions/:id/answers to return the answers to the given question
     */
    Questions.prototype.answersById = function (id) {
        var url      = this.url + '/' + id + '/answers',
            deferred = $.Deferred();

        deferredRequest(this, deferred, url, {});

        return deferred.promise();
    };

    /**
     @description    POSTs a question
     */
    Questions.prototype.ask = function (question) {
        question     = question || {};
        var data     = {
                name : question.name,
                email: question.email,
                text : question.text,
                job  : question.job
            },
            deferred = $.Deferred();

        deferredRequest(this, deferred, this.url, { type: 'POST', dataType: 'json', data: data });

        return deferred.promise();
    };

    Questions.prototype.search = function (query) {
        var url = this.url + '/search/' + query;

        var deferred = $.Deferred();
        deferredRequest(this, deferred, url, { type: 'GET' });

        return deferred.promise();
    };


    /**
     @description    GET /search/:searchQuery
     This is the only function that gets debounced in here for now since the expectation is that
     it'll be called by a keydown/keyup method which might not be debounced/throttled
     @returns        {Function} - even if called multiple times in immediate succession, will only return the promise
     corresponding to the currently executing search.
     */
    function getDebouncedSearch(self) {

        function search(query) {
            var url      = '/search/:' + query,
                deferred = $.Deferred();

            deferredRequest(self, deferred, url, { type: 'GET', dataType: 'json' });

            return deferred.promise();
        }

        return promiseDebounce(search);
    }


    /**
     @description    The main API object
     */
    function BlueEconomics(args) {
        args = args || {};

        this.industries     = new Industries(args);
        this.jobs           = new Jobs(args);
        this.occupations    = new Occupations(args);
        this.questions      = new Questions(args);
        this.workExperience = new WorkExperience(args);

        this.search = getDebouncedSearch(this);
    }

    return new BlueEconomics();

})($);


module.exports = blueEconomics;
