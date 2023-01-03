$(function () {

    // rightside menu
    $('.header__btn').on('click' , function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click' , function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    // rightside menu (540px)
    $('.header__btn-menu').on('click' , function () {
        $('.menu').toggleClass('menu--open');
    });

    //При медиазапросе меньше 650 переместить элемент(jquery)
    if($(window).width() < 651) {
        $('.works-path__item--measurements').appendTo( $('.works-path__items-box') );
    }


    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true, //Чтобы менялась плавно\
        autoplay: true //Автоматически меняется слайд(стандарт 3 сек)
    }) //Активация слайдера(slick-carousel)
}); //Появляющиеся сбоку меню on/off

// Слайдер 3 точки внизу 10 картинок вверху
$('.contact-slider').slick({
    slidesToShow: 10, //изначально показывается 10 штук
    slidesToScroll: 10, //перемещать сразу по 10
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 1511,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 841,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 551,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
})


// Слайдер стрелки по бокам
$('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow-slide-left"></button>' ,

    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow-slide-right"></button>'
});



var mixer = mixitup('.gallery__inner' , {
    load : {
        filter: '.living'
    } //Чтобы автоматические филтровался сразу Ливинг раздел
});
