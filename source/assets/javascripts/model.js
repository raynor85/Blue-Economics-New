/**
 * model.js - start
 */

/**
 * Contains the API for retrieving data from the database
 */

/**
 * Retrieve the industries list from an input search string
 */

var getIndustries = function(searchQuery, parentElement) {
  var url = '/search/:' + searchQuery;
  var createList = function(parentElement, data) {
    parentElement.html('');
    $(data.industries).each(function(i, elem) {
      parentElement.append('<li>' + elem.name + '</li>');
    });
  };
  $.getJSON(url, {}, function(data) {
    createList(parentElement, data);
  });
};

var getIndustriesListener = function() {
  var parentElement = $('.input-group ul');
  parentElement = parentElement.length ? parentElement : $('<ul>').appendTo('.input-group');
  $('#section1 .awesome-form input').keydown(function(e) {
    getIndustries(e.currentTarget.value, parentElement);
  });
};

$(document).ready(function($) {
  getIndustriesListener();
});

/**
 * model.js - end
 */