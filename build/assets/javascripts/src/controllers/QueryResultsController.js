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
	this.job = jobs[0];
}

module.exports = QueryResultsController;