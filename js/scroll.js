$(document).ready(function(){
    $('#down').on('click', function(){
        $('html, body').animate({
            scrollTop: $(".middle").offset().top
        }, 1000);
    });
    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: $(".top").offset().top
        }, 1000);
    });
});
