$('.slider-sec .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    nav:true,
 
});

$('.full-services .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    items:3,
    nav:true,
 
});

$('.testimonal-sec .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    nav:true,
 
});



$(window).scroll(function(){
    if($(window).scrollTop() > 48) {
        $('body').addClass('headerSticky');
    }
    else{
        $('body').removeClass('headerSticky');
    }

});