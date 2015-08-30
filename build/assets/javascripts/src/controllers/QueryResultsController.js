"use strict";

/**
 * Created by john on 6/28/15.
 */

/**
 * Controller for the query results page.
 * @constructor
 * @ngInject
 */
function QueryResultsController(jobs) {
	this.job = getJob(jobs);


	function getJob(jobData) {
		if (jobData && jobData.length) {
			return jobData[0];
		}
		return "No job was selected";
	}
}

module.exports = QueryResultsController;