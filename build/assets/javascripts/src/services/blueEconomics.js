/**
 * Created by john on 6/28/15.
 */

var api = require('../blueEconomicsApi');

/**
 * Blue Economics API service
 * @returns {blueEconomics|exports|module.exports}
 */
function blueEconomics() {
    //TODO: fix this to use $http and/or $require, remove jquery dependency
    return api;
}

module.exports = blueEconomics;