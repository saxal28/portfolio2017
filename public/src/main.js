// fullPageJS plugin
$(document).ready(function() {
    $('#fullpage').fullpage({
        controlArrows: false,
        anchors:["home","aboutme","projects","contactme"],
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
    
    $(".fa").hover(function() {
        $(this).addClass("animated bounce");
    }, function() {
        $(this).removeClass("animated bounce");
    })
});

 
 

 