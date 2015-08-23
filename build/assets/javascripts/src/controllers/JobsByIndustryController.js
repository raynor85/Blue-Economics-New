/**
 * Created by john on 7/12/15.
 */

'use strict';

/**
 * @ngInject
 * @constructor
 * @param {array} jobs - passed via state params
 */
function JobsByIndustryController($state,jobs) {

    this.jobs = jobs;
    this.selectJob = selectJob;

    function selectJob(job) {
    	console.log(job);
        $state.go('queryResults', {
            job: job
        });
    }
}

module.exports = JobsByIndustryController;