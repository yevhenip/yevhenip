$(document).ready(function () {
    $('#year').text(new Date().getFullYear());
    $(".navbar-toggle").click(function () {
        navToggle();
    });
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        if (window.innerWidth < 750)
            navToggle()
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    function navToggle() {
        $(".navbar-collapse").toggleClass("collapse").slideToggle("fast");
    }

    $(window).resize(function () {
        let photo = $('.photo');
        let width = photo.width().toString()
        photo.css('height', `${width}`)
    });
});