$(document).ready(function() {
    console.log("ready!");
    init();
});

function init() {
    var current_url = window.location.pathname; // Returns path only
    var url = window.location.href;

    // separate url
    var path = current_url.split('/').pop();


    if (path == " ") {
        $('.home-current').addClass("active-custom");
    } else {
        $('#menu li a').each(function(key, link) {
            var href = $(this).attr("href");
            if (href == path) {
                $(this).parents('li').addClass("current");
            }
        });

        $('.client-info li a').each(function(key, link) {

            var href = $(this).attr("href");

            if (href == "/" + path) {
                $(this).addClass("active-custom");
            }
        });
    }

    console.log(path);

    $('.automatic-slider').unslider({
        autoplay: true
    });
}