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

                //FIXME: this is only temporary since we get back one result from the back end - clone it a bunch of times to make some data to show in the list
                var testData = data.industries.concat(data.industries).concat(data.industries).concat(data.industries).concat(data.industries).concat(data.industries).concat(data.industries).concat(data.industries);
                for (var i = 0; i < testData.length; i++) {
                    testData[i] = angular.extend({}, testData[i], { id : i });
                }
                self.searchResults = testData;

                //self.searchResults = data.industries;
            });
    }
}

module.exports = IndustryController;