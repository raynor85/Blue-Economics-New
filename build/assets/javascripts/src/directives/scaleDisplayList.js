/**
 * Created by john on 7/8/15.
 */

'use strict';

require('../scss/listResults.scss');

var angular = require('angular');

/**
 * @ngInject
 */
function scaleDisplayList() {
    return {
        restrict : 'A',

        link : function (scope, elem, attrs) {


            angular.element(elem).on('mouseover', function (e) {
                if (e.target.tagName.toLowerCase() === 'li') {
                    var styles   = ['level-1', 'level-2'];
                    var styleIdx = 0;
                    angular.element(e.target).addClass('selected');

                    var prev = e.target.previousElementSibling;
                    while (prev && prev.tagName.toLowerCase() === 'li') {
                        angular.element(prev).addClass(styles[styleIdx]);
                        prev = prev.previousElementSibling;
                        if (styleIdx < styles.length - 1) {
                            styleIdx++;
                        }
                    }

                    styleIdx = 0;
                    var next = e.target.nextElementSibling;
                    while (next && next.tagName.toLowerCase() === 'li') {
                        angular.element(next).addClass(styles[styleIdx]);
                        next = next.nextElementSibling;
                        if (styleIdx < styles.length - 1) {
                            styleIdx++;
                        }
                    }
                }
            });

            angular.element(elem).on('mouseout', function (e) {
                if (e.target.tagName.toLowerCase() === 'li') {
                    var styles   = ['level-1', 'level-2'];
                    var styleIdx = 0;
                    angular.element(e.target).removeClass('selected');

                    var prev = e.target.previousElementSibling;
                    while (prev && prev.tagName.toLowerCase() === 'li') {
                        angular.element(prev).removeClass(styles[styleIdx]);
                        prev = prev.previousElementSibling;
                        if (styleIdx < styles.length - 1) {
                            styleIdx++;
                        }
                    }

                    styleIdx = 0;
                    var next = e.target.nextElementSibling;
                    while (next && next.tagName.toLowerCase() === 'li') {
                        angular.element(next).removeClass(styles[styleIdx]);
                        next = next.nextElementSibling;
                        if (styleIdx < styles.length - 1) {
                            styleIdx++;
                        }
                    }
                }
            });

        }
    }
}

module.exports = scaleDisplayList;