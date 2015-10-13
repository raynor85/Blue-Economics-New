/**
 * Created by hari on 10/10/15.
 */

'use strict';

require('../scss/carouselList.scss');

var angular = require('angular');

/**
 * @ngInject
 */
function carouselList() {
    return {
        restrict : 'A',
        link : function (scope, element, attrs) {
            scope.$on('DATA_LOADED', function() {
                var firstElement = angular.element("#list").children().first();
                firstElement.addClass("center");
                var nextElement = angular.element(firstElement).next();
                nextElement.addClass("plus-one");
                var threshold = 150, restraint = 100, startX, startY, distX, distY;

                function moveList(direction, elem) {
                    var siblings = elem.siblings();
                    for(var i=0; i<siblings.length; i++) {
                        angular.element(siblings[i]).removeClass("plus-one");
                    }
                    if(direction == "down") {
                        elem.removeClass("center");
                        angular.element("#list").css({
                            top: '+=55px'
                        });
                        elem = elem.prev();
                        elem.addClass("center");
                        elem.next().addClass("plus-one");
                        if(elem.prev().length == 1) {
                            elem.prev().addClass("plus-one");
                        }
                    }
                    else {
                        elem.removeClass("center");
                        angular.element("#list").css({
                            top: '-=55px'
                        });
                        elem = elem.next();
                        elem.addClass("center");
                        elem.prev().addClass("plus-one");
                        if(elem.next().length == 1) {
                            elem.next().addClass("plus-one");
                        }
                    }
                }

                element.on('mousewheel DOMMouseScroll', function(event){
                    var elem = angular.element("li.center");
                    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                        if(elem.prev().length==1) {
                            moveList("down", elem);
                        }
                    }
                    else {
                        if(elem.next().length==1) {
                            moveList("up", elem);
                        }
                    }
                });

                element.on('touchstart', function(event){
                    event = event.originalEvent;
                    var touchobj = event.changedTouches[0];
                    startX = touchobj.pageX;
                    startY = touchobj.pageY;
                });

                element.on('touchmove', function(event){
                    event = event.originalEvent;
//                                    event.preventDefault();
                    var touchobj = event.changedTouches[0];
                    var elem = angular.element("li.center");
                    distX = touchobj.pageX - startX;
                    distY = touchobj.pageY - startY;
                    if(Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){
                        if(distY < 0) {
                            if(elem.next().length==1) {
                                moveList("up", elem);
                            }
                        }
                        else {
                            if(elem.prev().length==1) {
                                moveList("down", elem);
                            }
                        }
                    }
                });

                element.on('touchend', function(event){
                    event = event.originalEvent;
                });
            });
        }
    };
}

module.exports = carouselList;
