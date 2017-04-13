// fullPageJS plugin
$(document).ready(function() {
    $('#fullpage').fullpage({
        controlArrows: false,
        anchors:["home","aboutme","contactme"],
        continuousVertical: true,
    });
    // fittext
    //  $("#responsive_headline").fitText();

    console.log(window);
    
    $("#down").click(function() {
        var e = $.Event('keyup');
        e.keyCode= 40; // enter
        $(this).trigger(e);
    })
    
    $(".sidebar-button").hover(function() {
        $(this).addClass("fa-hover-expand");
    }, function() {
        $(this).removeClass("fa-hover-expand");
    })
});

 
 

 