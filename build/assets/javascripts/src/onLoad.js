var $             = require('jquery');
var blueEconomics = require('./blueEconomicsApi');


module.exports = (function () {

    return {
        init: init
    };

})();

function init() {
    setContinuousNavigation();

    getIndustriesListener();

    $("#demosMenu").change(function () {
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });
}


function setContinuousNavigation() {
    if (screen.width < 480) {
        // $('#fullpage').fullpage({
        //   anchors: ['firstPage', 'secondPage', 'thirdPage'],
        //   slidesNavigation: true,
        //   continuousVertical: false,
        //   setAutoScrolling: false
        // });
        return;
    }
    else {
        $('#fullpage').fullpage({
            anchors           : ['firstPage', 'secondPage', 'thirdPage'],
            slidesNavigation  : true,
            continuousVertical: false
        });
    }
}


var getIndustries = function (searchQuery, parentElement) {
    var url        = '/search/:' + searchQuery;
    var createList = function (parentElement, data) {
        parentElement.html('');
        $(data.industries).each(function (i, elem) {
            parentElement.append('<li>' + elem.name + '</li>');
        });
    };

    blueEconomics.search(searchQuery)
        .done(function (data) {
            createList(parentElement, data);
        });
};

var getIndustriesListener = function () {
    var parentElement = $('.input-group ul');
    parentElement     = parentElement.length ? parentElement : $('<ul>').appendTo('.input-group');
    //$('#section1 .awesome-form input').keydown(function(e) {
    $('#section1 .awesome-form input').keyup(function (e) {
        getIndustries(e.currentTarget.value, parentElement);
    });
};
