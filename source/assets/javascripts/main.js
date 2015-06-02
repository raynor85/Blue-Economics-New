$(document).ready(function() {
  if(screen.width < 480) {
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
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      slidesNavigation: true,
      continuousVertical: false
    });
  }
});

