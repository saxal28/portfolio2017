// fullPageJS plugin
$(document).ready(function() {
    $('#fullpage').fullpage({
        controlArrows: false,
        anchors:["home","aboutme","projects","contactme"]
    });

});

// fittext
 $("#responsive_headline").fitText();
     $('.fp-controlArrow fp-next').hide();
