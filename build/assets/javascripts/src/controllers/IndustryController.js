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