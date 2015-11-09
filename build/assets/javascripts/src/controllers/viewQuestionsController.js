/**
 * Created by hari on 10/20/15.
 */

'use strict';

require('../scss/expertPages.scss');

/**
 * Controller for the initial page.
 * @param $scope
 * @constructor
 * @ngInject
 */
function viewQuestionsController($scope, $timeout, blueEconomics) {
    var self = $scope;
    self.getQuestions = getQuestions;

    /**
     * Get the list of questions from the server
    **/
    function getQuestions() {
          blueEconomics.questions.get()
              .then(function(data) {
                  self.searchResults = data;
                  $timeout(function() {
                      $scope.$broadcast('DATA_LOADED');
                  }, 100);
                  console.log(self.searchResults);
              })
              .catch(function(err) {
                  console.log('Error retrieving available list of questions: ', err);
                  self.searchResults = [];
              });
    }

    self.getQuestions();
}

module.exports = viewQuestionsController;
