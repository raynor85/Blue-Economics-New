/**
 * Created by john on 6/27/15.
 */

var angular   = require('angular');
var uiRouter  = require('angular-ui-router');
var ngAnimate = require('angular-animate');


/**
 * Configures the ui-router states for the application.
 * @param $stateProvider
 * @param $urlRouterProvider
 */
function stateConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url         : '/',
            template    : require('../../views/home.html'),
            controller  : 'HomeController',
            controllerAs: 'vm'
        })
        .state('industry', {
            url         : '/industry',
            template    : require('../../views/industry.html'),
            controller  : 'IndustryController',
            controllerAs: 'vm'
        })
        .state('queryResults', {
            url         : '/results',
            template    : require('../../views/queryResults.html'),
            controller  : 'QueryResultsController',
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
        .controller('QueryResultsController', require('./controllers/QueryResultsController'))
        .factory('blueEconomics', require('./services/blueEconomics'))
        .directive('fullPage', require('./directives/fullPage'));
};