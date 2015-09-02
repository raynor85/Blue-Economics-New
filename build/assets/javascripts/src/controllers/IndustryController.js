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
        var MIN_CHARS = 3;
        var searchTerm = self.industry;
        
        if (searchTerm && searchTerm.length >= MIN_CHARS) {
            blueEconomics.search(searchTerm || '')
                .then(function(data) {
                    self.searchResults = data.industries || [];
                    console.log(self.searchResults);
                })
                .catch(function(err) {
                    console.log('Error retrieving industries: ', err);
                    self.searchResults = [];
                });
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

    // fetchIndustries();
}

module.exports = IndustryController;