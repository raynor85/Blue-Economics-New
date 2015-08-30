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

        if (!self.industry || !self.industries)
            return;

        for (var i = 0; i < self.industries.length; i++) {
            var currentIndustry = self.industries[i];
            if (currentIndustry.name.toLowerCase().includes(self.industry.toLowerCase())) {
                self.searchResults.push(currentIndustry);
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

module.exports = IndustryController;