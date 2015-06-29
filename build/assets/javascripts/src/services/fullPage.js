/**
 * Created by john on 6/28/15.
 */

var $ = require('jquery');

function setFullPage() {
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
            //anchors           : ['firstPage', 'secondPage', 'thirdPage'],
            slidesNavigation  : true,
            continuousVertical: false
        });
    }
}

module.exports = function() {
    // this is registered as an angular factory so we return the function
    return setFullPage;
};