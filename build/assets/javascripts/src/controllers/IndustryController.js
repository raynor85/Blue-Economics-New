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
            .then(function (data) {
                self.searchResults = data.industries;
            });
    }
}

module.exports = IndustryController;