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

	var angular = __webpack_require__(2);
	var uiRouter = __webpack_require__(4);
	var ngAnimate = __webpack_require__(5);


	/**
	 * Configures the ui-router states for the application.
	 * @param $stateProvider
	 * @param $urlRouterProvider
	 */
	function stateConfig($stateProvider, $urlRouterProvider) {
	    //
	    $stateProvider
	        .state('home', {
	            url: '/',
	            template: __webpack_require__(7),
	            controller: 'HomeController',
	            controllerAs: 'vm'
	        })
	        .state('industry', {
	            url: '/industry',
	            template: __webpack_require__(8),
	            controller: 'IndustryController',
	            controllerAs: 'vm'
	        })
	        .state('jobsByIndustry', {
	            params: {
	                jobs: null
	            },
	            url: '/jobsByIndustry',
	            template: __webpack_require__(9),
	            controller: 'JobsByIndustryController',
	            controllerAs: 'vm',
	            resolve: {
	                'jobs': /**@ngInject*/ ["$stateParams", function($stateParams) {
	                    return $stateParams.jobs;
	                }]
	            }
	        })
	        .state('queryResults', {
	            params: {
	                jobs: null
	            },
	            url: '/results',
	            template: __webpack_require__(10),
	            controller: 'QueryResultsController',
	            controllerAs: 'vm',
	            resolve: {
	                'jobs': /**@ngInject*/ ["$stateParams", function($stateParams) {
	                    return $stateParams.jobs;
	                }]
	            }
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
	        .controller('HomeController', __webpack_require__(11))
	        .controller('IndustryController', __webpack_require__(12))
	        .controller('JobsByIndustryController', __webpack_require__(13))
	        .controller('QueryResultsController', __webpack_require__(14))
	        .factory('blueEconomics', __webpack_require__(15))
	        .directive('fullPage', __webpack_require__(16))
	        .directive('scaleDisplayList', __webpack_require__(19));
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

	module.exports = "<div class='section' id='section1' full-page>\n    <form class='awesome-form' method='get' ng-submit=\"vm.ask()\">\n        <div class='input-group'>\n            <input required='required' type='text' ng-model=\"vm.industry\" ng-change=\"vm.getIndustries()\"\n                   ng-model-options=\"{debounce:250}\">\n            <label for=''>\n                What industry are you interested in?\n            </label>\n        </div>\n        <ul scale-display-list class=\"results-list\" ng-if=\"vm.searchResults.length > 0\">\n            <li class=\"results-list-item\"\n                ng-repeat=\"result in vm.searchResults track by result.id\"\n                ng-click=\"vm.getJobs(result)\">\n                {{result.name}}\n            </li>\n        </ul>\n        <input type='submit' value='Ask'>\n    </form>\n</div>";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class='section' id='section1' full-page>\n    <ul scale-display-list class=\"results-list\" ng-if=\"vm.jobs.length > 0\">\n        <li class=\"results-list-item\" ng-click=\"vm.selectJob(result)\"\n            ng-repeat=\"result in vm.jobs track by result.id\">\n            {{result.name}}\n        </li>\n    </ul>\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class='section' id='section2' full-page>\n    <div class='slide' data-anchor='slideA' id='slide1'>\n        <div class='results'>\n            <div class='results-text'>\n                <h1>{{vm.job.name}}</h1>\n                <h4>\n                    <strong>\n                        Salary:\n                    </strong>\n                    {{vm.job.annual_salary}}, Per Year\n                </h4>\n                <br>\n\n                <p>\n                    <strong>\n                        Industry:\n                    </strong>\n                    {{vm.job.industry}}\n                </p>\n                <br>\n\n                <p>\n                    <strong>\n                        What they do:\n                    </strong>\n                    {{vm.job.description}}\n                </p>\n                <br>\n\n                <p>\n                    <strong>\n                        Education Required:\n                    </strong>\n                    {{vm.job.education_level}}\n                </p>\n            </div>\n        </div>\n    </div>\n    <div id='search-icon'>\n        <a href='#secondPage'>\n            <i class='fa fa-search fa-4x'></i>\n        </a>\n    </div>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Created by john on 6/27/15.
	 */

	'use strict';

	/**
	 * Controller for the initial page.
	 * @param $scope
	 * @constructor
	 * @ngInject
	 */
	function HomeController($scope) {

	}
	HomeController.$inject = ["$scope"];

	module.exports = HomeController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Created by john on 6/28/15.
	 */

	'use strict';

	/**
	 * Controller for the 'What industry' page
	 * @param $state
	 * @param blueEconomics - The Blue Economics API
	 * @constructor
	 * @ngInject
	 */
	function IndustryController($state, blueEconomics) {

	    var self = this;

	    this.ask = ask;
	    this.industry = '';
	    this.getIndustries = getIndustries;
	    this.getJobs = getJobs;
	    this.searchResults = [];

	    this.industries = [];


	    function fetchIndustries() {
	        blueEconomics.search(self.industry || '')
	            .then(function(data) {
	                self.industries = data.industries;
	            });
	    }


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
	        self.searchResults = [];

	        if (!self.industry || self.industry == null || self.industry == undefined)
	            return;

	        for (var i = 0; i < self.industries.length; i++) {
	            var currentIndustry = self.industries[i];
	            if (currentIndustry.name.toLowerCase().includes(self.industry.toLowerCase())) {
	                this.searchResults.push(currentIndustry);
	            }
	        }
	    }

	    /**
	     * Gets a list of jobs for the specified industry.
	     * @param industry
	     */
	    function getJobs(industry) {
	        blueEconomics.jobs.getByIndustry(industry)
	            .then(function(data) {
	                $state.go('jobsByIndustry', {
	                    jobs: data
	                });
	            })
	            .catch(function(err) {
	                console.log(err);
	            });
	    }

	    fetchIndustries();
	}
	IndustryController.$inject = ["$state", "blueEconomics"];

	module.exports = IndustryController;

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Created by john on 7/12/15.
	 */

	'use strict';

	/**
	 * @ngInject
	 * @constructor
	 * @param {array} jobs - passed via state params
	 */
	function JobsByIndustryController($state, jobs, blueEconomics) {

	    this.jobs = jobs;
	    this.selectJob = selectJob;

	    function selectJob(job) {

	        blueEconomics.jobDetails.getById(job.id)
	            .then(function(data) {
	                $state.go('queryResults', {
	                    jobs: data
	                });
	            })
	            .catch(function(err) {
	                console.log(err);
	            });



	    }
	}
	JobsByIndustryController.$inject = ["$state", "jobs", "blueEconomics"];

	module.exports = JobsByIndustryController;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by john on 6/28/15.
	 */

	/**
	 * Controller for the query results page.
	 * @constructor
	 * @ngInject
	 */
	function QueryResultsController(jobs) {
		this.job = jobs[0];
		console.log(jobs);
	}
	QueryResultsController.$inject = ["jobs"];

	module.exports = QueryResultsController;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 6/28/15.
	 */

	'use strict';

	var angular = __webpack_require__(2);

	/**
	 * Blue Economics API service
	 * @description     USAGE:

	 blueEconomics.industries.get();
	 blueEconomics.industries.filter({ text: '', cached: false });

	 blueEconomics.jobs.get();
	 .. etc

	 Special cases (these methods do not exist elsewhere)

	 blueEconomics.workExperience.getById(id)
	 blueEconomics.questions.ask(question)
	 blueEconomics.questions.answersById(id)
	 blueEconomics.questions.search(query)


	 All methods return promises:

	 blueEconomics.workExperience.getById(12345)
	 .then(function(data) {
	                                   // do stuff
	                                });


	 blueEconomics.industries.get()
	 .then(function(data) {
	                                    // do something with the data
	                                })
	 .catch(function(error) {
	                                    console.log('Something bad happened!');
	                                });

	 * @returns {BlueEconomics} The API service
	 * @ngInject
	 */
	function blueEconomics($http, $q) {

	    /**
	     @description    Got this from https://github.com/jaz303/promise-debounce/blob/master/index.js
	     Given a function that returns a promise, this returns a function which will return
	     the existing promise until it has been resolved, if called several times in succession.
	     */
	    function promiseDebounce(fn, ctx) {
	        var pending = null;
	        return function() {
	            if (pending) return pending;
	            pending = fn.apply(ctx, arguments);
	            pending.then(function() {
	                pending = null;
	            });
	            return pending;
	        };
	    }

	    function deferredRequest(self, url, args, params) {
	        args = angular.extend({
	            type: 'GET',
	            dataType: 'json'
	        }, {
	            params: params
	        });

	        return $http[args.type.toLowerCase()](url, args)
	            .then(function(result) {
	                self.data = result.data;
	                return self.data;
	            })
	            .catch(function(error) {
	                $q.reject(error);
	            });
	    }

	    /**
	     @description    Base class for queries, defines get() and filter() methods that are common to everything
	     */
	    function BaseQuery(url, args) {
	        var defaults = {
	            // right now there are no defaults
	        };
	        args = angular.extend(defaults, args || {});

	        this.url = url || '/';
	        this.data = []; // store returned data here, use if requested
	    }

	    /**
	     @description    Makes a GET request to this.url and returns the result.
	     @param          {object} args
	     .cached - true if the request should use cached data if available, false if it should always make a request to the server
	     @returns        {Promise} resolved with JSON data from the ajax call.
	     */
	    BaseQuery.prototype.get = function(args, params) {
	        args = args || {};

	        var cached = !!args.cached,
	            deferred = $q.defer();

	        if (cached && this.data.length > 0) {
	            deferred.resolve(this.data);

	        } else {
	            return deferredRequest(this, this.url, args, params);
	        }

	        return deferred.promise;
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
	    BaseQuery.prototype.filter = function(args) {
	        args = args || {};

	        var cached = !!args.cached,
	            filterText = (args.text || '').toLowerCase(),
	            deferred = this.get(args),
	            filterSelector = args.filterSelector || getFilterSelector;

	        var filterDeferred = deferred.pipe(function(data) {
	            var filtered = data.filter(function(i) {
	                var compareText = (filterSelector(i) || '').toLowerCase();
	                return compareText.indexOf(filterText) >= 0;
	            });
	            return filtered;
	        });

	        return filterDeferred.promise;

	        function getFilterSelector(item) {
	            return item;
	        } // override this in case the data is something besides a list of strings
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

	    Jobs.prototype.getByIndustry = function(industry) {
	        if (!industry || typeof(industry.id) === 'undefined') {
	            throw new Error("Industry must be specified.");
	        }

	        return this.get({}, {
	            industry: industry.id,
	            cached: false
	        });
	    };


	    function JobDescription() {
	        BaseQuery.call(this, 'job_description', {});
	    }

	    JobDescription.prototype.get = function(jobName) {
	        var url = this.url + '?' + jobName.replace(' ', '%20');
	        var request = deferredRequest(this, url, {});
	        return request;
	    };

	    function JobDetails() {
	        BaseQuery.call(this, '/job_details',{});
	    }

	    JobDetails.prototype = Object.create(BaseQuery.prototype);

	    JobDetails.prototype.getById = function(id) {

	        return this.get({}, {
	            id: id,
	            cached: false
	        });
	    };

	    /**
	     @description    GET /workexperience
	     GET /workexperience/:id
	     */
	    function WorkExperience() {
	        BaseQuery.call(this, '/workexperience', {});
	    }

	    WorkExperience.prototype = Object.create(BaseQuery.prototype);

	    WorkExperience.prototype.getById = function(id) {
	        var url = this.url + '/' + id;

	        var request = deferredRequest(this, url, {});

	        var piped = request.then(function(data) {
	            if (data && data.length === 1) {
	                return data[0];
	            } else {
	                return null;
	            }
	        });

	        return piped;
	    };


	    /**
	     @description    POST /occupations (//todo: get data structure shape)
	     */
	    function Occupations() {
	        BaseQuery.call(this, '/occupations', {});
	    }

	    Occupations.prototype = Object.create(BaseQuery.prototype); // override the get() method since it's a POST here

	    /**
	     @description    POST to /occupations to do a query by education levels
	     @param          {Array} educationLevels - a list of strings?
	     */
	    Occupations.prototype.get = function(educationLevels) {
	        //TODO: what format does the server side expect?
	        educationLevels = educationLevels || [];

	        return deferredRequest(this, this.url, {
	            type: 'POST',
	            data: educationLevels
	        });
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
	    Questions.prototype.answersById = function(id) {
	        var url = this.url + '/' + id + '/answers';

	        return deferredRequest(this, url, {});
	    };

	    /**
	     @description    POSTs a question
	     */
	    Questions.prototype.ask = function(question) {
	        question = question || {};
	        var data = {
	            name: question.name,
	            email: question.email,
	            text: question.text,
	            job: question.job
	        };

	        return deferredRequest(this, this.url, {
	            type: 'POST',
	            dataType: 'json',
	            data: data
	        });
	    };

	    Questions.prototype.search = function(query) {
	        var url = this.url + '/search/' + query;

	        return deferredRequest(this, url, {
	            type: 'GET'
	        });
	    };


	    /**
	     @description    GET /search/:searchQuery
	     This is the only function that gets debounced in here for now since the expectation is that
	     it'll be called by a keydown/keyup method which might not be debounced/throttled
	     @returns        {Function} - even if called multiple times in immediate succession, will only return the promise
	     corresponding to the currently executing search.
	     */
	    function getDebouncedSearch(self, duration) {

	        function search(query) {
	            var url = '/search/:' + query;

	            return deferredRequest(self, url, {
	                type: 'GET',
	                dataType: 'json'
	            });
	        }

	        return promiseDebounce(search);
	    }


	    /**
	     @description    The main API object
	     */
	    function BlueEconomics(args) {
	        args = args || {};

	        this.industries = new Industries(args);
	        this.jobs = new Jobs(args);
	        this.jobDescriptions = new JobDescription(args);
	        this.occupations = new Occupations(args);
	        this.questions = new Questions(args);
	        this.workExperience = new WorkExperience(args);
	        this.jobDetails = new JobDetails(args);

	        this.search = getDebouncedSearch(this);
	    }

	    // TODO: do we want to return an instance, or a constructor function?
	    return new BlueEconomics();
	}
	blueEconomics.$inject = ["$http", "$q"];


	module.exports = blueEconomics;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 6/28/15.
	 */

	'use strict';

	var $ = __webpack_require__(17);

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

/***/ },
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by john on 7/8/15.
	 */

	'use strict';

	__webpack_require__(20);

	var angular = __webpack_require__(2);

	/**
	 * @ngInject
	 */
	function scaleDisplayList() {
	    return {
	        restrict : 'A',

	        link : function (scope, elem, attrs) {


	            angular.element(elem).on('mouseover', function (e) {
	                if (e.target.tagName.toLowerCase() === 'li') {
	                    var styles   = ['level-1', 'level-2'];
	                    var styleIdx = 0;
	                    angular.element(e.target).addClass('selected');

	                    var prev = e.target.previousElementSibling;
	                    while (prev && prev.tagName.toLowerCase() === 'li') {
	                        angular.element(prev).addClass(styles[styleIdx]);
	                        prev = prev.previousElementSibling;
	                        if (styleIdx < styles.length - 1) {
	                            styleIdx++;
	                        }
	                    }

	                    styleIdx = 0;
	                    var next = e.target.nextElementSibling;
	                    while (next && next.tagName.toLowerCase() === 'li') {
	                        angular.element(next).addClass(styles[styleIdx]);
	                        next = next.nextElementSibling;
	                        if (styleIdx < styles.length - 1) {
	                            styleIdx++;
	                        }
	                    }
	                }
	            });

	            angular.element(elem).on('mouseout', function (e) {
	                if (e.target.tagName.toLowerCase() === 'li') {
	                    var styles   = ['level-1', 'level-2'];
	                    var styleIdx = 0;
	                    angular.element(e.target).removeClass('selected');

	                    var prev = e.target.previousElementSibling;
	                    while (prev && prev.tagName.toLowerCase() === 'li') {
	                        angular.element(prev).removeClass(styles[styleIdx]);
	                        prev = prev.previousElementSibling;
	                        if (styleIdx < styles.length - 1) {
	                            styleIdx++;
	                        }
	                    }

	                    styleIdx = 0;
	                    var next = e.target.nextElementSibling;
	                    while (next && next.tagName.toLowerCase() === 'li') {
	                        angular.element(next).removeClass(styles[styleIdx]);
	                        next = next.nextElementSibling;
	                        if (styleIdx < styles.length - 1) {
	                            styleIdx++;
	                        }
	                    }
	                }
	            });

	        }
	    }
	}

	module.exports = scaleDisplayList;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap!./listResults.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap!./listResults.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports


	// module
	exports.push([module.id, "/**\n * Created by john on 7/8/15.\n */\n.results-list {\n  color: white;\n  width: 90%;\n  max-height: 7.5em;\n  overflow-y: auto;\n  margin: 20px auto;\n  border: 1px solid white; }\n\n.results-list-item {\n  cursor: pointer;\n  transition: 0.2s all;\n  font-size: 1em;\n  line-height: 1.5em; }\n\n.selected {\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  font-size: 1.5em;\n  background-color: #f68753; }\n\n.level-1 {\n  font-size: 1.2em;\n  opacity: 0.8; }\n\n.level-2 {\n  font-size: 0.96em;\n  opacity: 0.64; }\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);