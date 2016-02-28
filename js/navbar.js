// Sticky Header
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

// navigation scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});