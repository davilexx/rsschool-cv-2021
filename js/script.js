$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu').toggleClass('active');
    });
});

$(document).ready(function(){
    $("#list").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});