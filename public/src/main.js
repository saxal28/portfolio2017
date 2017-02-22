// fullPageJS plugin
$(document).ready(function() {
    $('#fullpage').fullpage({
        controlArrows: false,
        anchors:["home","aboutme","projects","contactme"],
        continuousVertical: true,
    });


    console.log(window);
    $("#down").click(function() {
        // var down = document.getElementById("down");
        // var hash = window.location.href.substring(41);
        // var location = window.location;
        // location.hash = "#aboutme";
        // document.body.querySelector("#contact").scrollIntoView(true);
    })
});

// fittext
 $("#responsive_headline").fitText();
 