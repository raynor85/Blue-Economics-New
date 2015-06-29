webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 6/20/15.
	 */

	'use strict';

	/*  vendor files have been packed into a separate chunk included in index.html */


	/*  This is the entry point to the application. It initializes angular and sets everything up. */
	__webpack_require__(1)();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 6/27/15.
	 */

	'use strict';

	var angular   = __webpack_require__(2);
	var uiRouter  = __webpack_require__(4);
	var ngAnimate = __webpack_require__(5);


	/**
	 * Configures the ui-router states for the application.
	 * @param $stateProvider
	 * @param $urlRouterProvider
	 */
	function stateConfig($stateProvider, $urlRouterProvider) {

	    $stateProvider
	        .state('home', {
	            url         : '/',
	            template    : __webpack_require__(7),
	            controller  : 'HomeController',
	            controllerAs: 'vm'
	        })
	        .state('industry', {
	            url         : '/industry',
	            template    : __webpack_require__(8),
	            controller  : 'IndustryController',
	            controllerAs: 'vm'
	        })
	        .state('queryResults', {
	            url         : '/results',
	            template    : __webpack_require__(9),
	            controller  : 'QueryResultsController',
	            controllerAs: 'vm'
	        });

	    $urlRouterProvider.otherwise('/');
	}
	stateConfig.$inject = ["$stateProvider", "$urlRouterProvider"];


	/**
	 * Initializes all the angular stuff
	 */
	module.exports = function initAngular() {

	    angular.module('app', [uiRouter, ngAnimate])
	        .config(stateConfig);

	    angular.module('app')
	        .controller('HomeController', __webpack_require__(10))
	        .controller('IndustryController', __webpack_require__(11))
	        .controller('QueryResultsController', __webpack_require__(12))
	        .factory('blueEconomics', __webpack_require__(13))
	        .directive('fullPage', __webpack_require__(17));
	};

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class='section' id='section0' full-page>\n    <div id='main-box'>\n        <a ui-sref=\"industry\">\n            <div id='start-business'>\n                <div class='text'>\n                    <h1>I want to start a business.</h1>\n\n                    <h3>Entrepreneurial advice and credit.</h3>\n                </div>\n            </div>\n        </a>\n        <a ui-sref=\"industry\">\n            <div id='find-job'>\n                <div class='text'>\n                    <h1>I want to find a better job.</h1>\n\n                    <h3>Workforce Development.</h3>\n                </div>\n            </div>\n        </a>\n        <a ui-sref=\"industry\">\n            <div id='help-business'>\n                <div class='text'>\n                    <h1>I need help with my business.</h1>\n\n                    <h3>Small business services and credit.</h3>\n                </div>\n            </div>\n        </a>\n    </div>\n</div>";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class='section' id='section1' full-page>\n    <form action='' class='awesome-form' method='get' ng-submit=\"vm.ask()\">\n        <div class='input-group'>\n            <input required='required' type='text' ng-model=\"vm.industry\" ng-change=\"vm.getIndustries()\"\n                   ng-model-options=\"{debounce:250}\">\n            <label for=''>\n                What industry are you interested in?\n            </label>\n        </div>\n        <ul ng-if=\"vm.searchResults.length > 0\">\n            <li ng-repeat=\"result in vm.searchResults\">\n                {{result.name}}\n            </li>\n        </ul>\n        <input type='submit' value='Ask'>\n    </form>\n</div>";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class='section' id='section2' full-page>\n    <div class='slide' data-anchor='slideA' id='slide1'>\n        <div class='results'>\n            <div class='results-text'>\n                <h1>Job Title</h1>\n                <h4>\n                    <strong>\n                        Salary:\n                    </strong>\n                    65,950, Per Year\n                </h4>\n                <br>\n\n                <p>\n                    <strong>\n                        Also Called:\n                    </strong>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat excepturi quam culpa recusan.\n                </p>\n                <br>\n\n                <p>\n                    <strong>\n                        What they do:\n                    </strong>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nihil natus facilis sed voluptatum\n                    impedit error laudantium fuga blanditiis, architecto? Sapiente possimus quas exercitationem\n                    cupiditate quod ad fugit nesciunt temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing\n                    elit. Dolorem nemo assumenda debitis, eos animi, asperiores quas quod necessitatibus quis inventore\n                    reiciendis nulla quasi perferendis, et quibusdam\n                    aliquam. Facere, consequuntur, blanditiis.\n                </p>\n                <br>\n\n                <p>\n                    <strong>\n                        Education Required:\n                    </strong>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class='slide' data-anchor='slideB' id='slide2'>\n        <div class='results'>\n            <div class='results-text'>\n                <h1>Job Title</h1>\n                <h4>\n                    <strong>\n                        Salary:\n                    </strong>\n                    65,950, Per Year\n                </h4>\n                <br>\n\n                <p>\n                    <strong>\n                        Also Called:\n                    </strong>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat excepturi quam culpa recusan.\n                </p>\n                <br>\n\n                <p>\n                    <strong>\n                        What they do:\n                    </strong>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nihil natus facilis sed voluptatum\n                    impedit error laudantium fuga blanditiis, architecto? Sapiente possimus quas exercitationem\n                    cupiditate quod ad fugit nesciunt temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing\n                    elit. Dolorem nemo assumenda debitis, eos animi, asperiores quas quod necessitatibus quis inventore\n                    reiciendis nulla quasi perferendis, et quibusdam aliquam. Facere, consequuntur, blanditiis.\n                </p>\n                <br>\n\n                <p>\n                    <strong>\n                        Education Required:\n                    </strong>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                </p>\n            </div>\n        </div>\n    </div>\n    <div id='search-icon'>\n        <a href='#secondPage'>\n            <i class='fa fa-search fa-4x'></i>\n        </a>\n    </div>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by john on 6/27/15.
	 */

	'use strict';

	/**
	 * Controller for the initial page.
	 * @param $scope
	 * @constructor
	 */
	function HomeController($scope) {

	}

	module.exports = HomeController;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Created by john on 6/28/15.
	 */

	'use strict';

	/**
	 * Controller for the 'What industry' page
	 * @param $scope
	 * @param $search
	 * @param blueEconomics - The Blue Economics API
	 * @constructor
	 */
	function IndustryController($scope, $state, blueEconomics) {

	    var self = this;

	    this.ask           = ask;
	    this.industry      = '';
	    this.getIndustries = getIndustries;
	    this.searchResults = [];


	    /**
	     * Asks a question
	     */
	    function ask() {
	        $state.go('queryResults');
	    }

	    /**
	     * Get a list of industries from the server matching the user's input
	     * @param text
	     */
	    function getIndustries() {
	        blueEconomics.search(self.industry || '')
	            .done(function (data) {
	                self.searchResults = data.industries;
	                $scope.$apply();    // TODO: remove this later, it's necessary because we're using jquery deferred instead of angular promise
	            });
	    }
	}

	module.exports = IndustryController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by john on 6/28/15.
	 */

	function QueryResultsController() {

	}

	module.exports = QueryResultsController;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 6/28/15.
	 */

	'use strict';

	var api = __webpack_require__(14);

	/**
	 * Blue Economics API service
	 * @returns {blueEconomics|exports|module.exports}
	 */
	function blueEconomics() {
	    //TODO: fix this to use $http and/or $require, remove jquery dependency
	    return api;
	}

	module.exports = blueEconomics;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 6/20/15.
	 */

	'use strict';

	var $ = __webpack_require__(15);

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

	        var cached         = !!args.cached,
	            filterText     = (args.text || '').toLowerCase(),
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
	    function getDebouncedSearch(duration) {

	        function search(query) {
	            var url      = '/search/:' + query,
	                deferred = $.Deferred();

	            deferredRequest(this, deferred, url, { type: 'GET', dataType: 'json' });

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

	        this.search = getDebouncedSearch();
	    }

	    // TODO: do we want to return an instance, or a constructor function?
	    return new BlueEconomics();


	})($);


	module.exports = blueEconomics;


/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 6/28/15.
	 */

	'use strict';

	var $ = __webpack_require__(15);

	/**
	 * Directive that calls fullpage.js when the element is loaded and removes it when it goes out of scope
	 * @returns {{link: Function}}
	 */
	function fullPageDirective() {
	    return {
	        link: function (scope, elem, attrs) {
	            $(elem).fullpage();

	            scope.$on('$destroy', function() {
	                $.fn.fullpage.destroy('all');
	            });
	        }
	    };
	}

	module.exports = fullPageDirective;

/***/ }
]);