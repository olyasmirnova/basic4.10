$( document ).ready(function() {
    //nav btn
    $('.nav__btn').click(function(){
        $('.header__nav-list').toggleClass('active');
    })

    //tabs
    $('.tabs__link').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');

        $('.tabs__link').removeClass('active');
        $('.tabs__content').removeClass('active');

        $(this).addClass('active');
        $(tab_id).addClass('active');
    })

    $('.gallery').slick({
        arrows: false,
        dots: true
    });
});