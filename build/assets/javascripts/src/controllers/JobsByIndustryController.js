/**
 * Created by john on 7/12/15.
 */

'use strict';

/**
 * @ngInject
 * @constructor
 * @param {array} jobs - passed via state params
 */
function JobsByIndustryController(jobs) {

    this.jobs = jobs;

    console.log(jobs);
}

module.exports = JobsByIndustryController;