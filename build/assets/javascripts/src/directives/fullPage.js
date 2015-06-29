/**
 * Created by john on 6/28/15.
 */

var $ = require('jquery');

/**
 * Directive that calls fullpage.js when the element is loaded and removes it when it goes out of scope
 * @returns {{link: Function}}
 */
function fullPageDirective() {
    return {
        link: function (scope, elem, attrs) {
            $(elem).fullpage();

            scope.$on('$destroy', function() {
                $.fn.fullpage.destroy('all');
            });
        }
    };
}

module.exports = fullPageDirective;