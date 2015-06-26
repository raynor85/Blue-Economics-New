/**
 * Created by john on 6/20/15.
 */

var $      = require('jquery');
var onLoad = require('./onLoad');

/*  Require any 3rd party libraries that are not npm modules */
require('./vendor');


/**
 * @description   This is the entry point to the application - it runs on document.ready
 */
$(function () {
    onLoad.init();
});
