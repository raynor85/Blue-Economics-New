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

module.exports = JobsByIndustryController;