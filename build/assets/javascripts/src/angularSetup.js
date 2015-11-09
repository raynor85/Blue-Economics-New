/**
 * Created by john on 6/27/15.
 */

'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngAnimate = require('angular-animate');


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
            template: require('../../views/home.html'),
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .state('industry', {
            url: '/industry',
            template: require('../../views/industry.html'),
            controller: 'IndustryController',
            controllerAs: 'vm'
        })
        .state('jobsByIndustry', {
            params: {
                jobs: null
            },
            url: '/jobsByIndustry',
            template: require('../../views/jobsByIndustry.html'),
            controller: 'JobsByIndustryController',
            controllerAs: 'vm',
            resolve: {
                'jobs': /**@ngInject*/ function($stateParams) {
                    return $stateParams.jobs;
                }
            }
        })
        .state('queryResults', {
            params: {
                jobs: null
            },
            url: '/results',
            template: require('../../views/queryResults.html'),
            controller: 'QueryResultsController',
            controllerAs: 'vm',
            resolve: {
                'jobs': /**@ngInject*/ function($stateParams) {
                    return $stateParams.jobs;
                }
            }
        })
        .state('viewQuestions', {
            url: '/viewQuestions',
            template: require('../../views/viewQuestions.html'),
            controller: 'viewQuestionsController',
            controllerAs: 'vm'
        })
        .state('askQuestion', {
            url: '/askQuestion',
            template: require('../../views/askQuestion.html'),
            controller: 'askQuestionController',
            controllerAs: 'vm'
        })
        .state('expertAnswerQuestion', {
            url: '/expert/answerQuestion',
            template: require('../../views/expertAnswerQuestion.html'),
            controller: 'expertAnswerQuestionController',
            controllerAs: 'vm'
        })
        .state('expertViewAnswers', {
            url: '/expert/viewAnswers',
            template: require('../../views/expertViewAnswers.html'),
            controller: 'expertViewAnswersController',
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
}


/**
 * Initializes all the angular stuff
 */
module.exports = function initAngular() {

    angular.module('app', [uiRouter, ngAnimate])
        .config(stateConfig);

    angular.module('app')
        .controller('HomeController', require('./controllers/HomeController'))
        .controller('IndustryController', require('./controllers/IndustryController'))
        .controller('JobsByIndustryController', require('./controllers/JobsByIndustryController'))
        .controller('QueryResultsController', require('./controllers/QueryResultsController'))
        .controller('viewQuestionsController', require('./controllers/viewQuestionsController'))
        .controller('askQuestionController', require('./controllers/askQuestionController'))
        .controller('expertAnswerQuestionController', require('./controllers/expertAnswerQuestionController'))
        .controller('expertViewAnswersController', require('./controllers/expertViewAnswersController'))
        .factory('blueEconomics', require('./services/blueEconomics'))
        .directive('fullPage', require('./directives/fullPage'))
        .directive('carouselList', require('./directives/carouselList'));
        // .directive('scaleDisplayList', require('./directives/scaleDisplayList'));
};
