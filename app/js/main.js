
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      };

      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
    };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

// ================================================================================== //

  // # Document on Ready
  // # Document on Resize
  // # Document on Scroll
  // # Document on Load

  // # Old browser notification
  // # 

// ================================================================================== //


var GRVE = GRVE || {};

(function($){

  "use strict";

  // # Document on Ready
  // ============================================================================= //
  GRVE.documentReady = {
    init: function() {
      GRVE.jReject.init();
      GRVE.slickInit.init();
      GRVE.showMore.init();
      GRVE.accordion.init();
      GRVE.navbar.init();
    }
  };

  // # Document on Resize
  // ============================================================================= //
  GRVE.documentResize = {
    init: function() {

    }
  };

  // # Document on Scroll
  // ============================================================================= //
  GRVE.documentScroll = {
    init: function() {

    }
  };

  // # Document on Load
  // ============================================================================= //
  GRVE.documentLoad = {
    init: function() {

    }
  };

  // # Old browser notification
  // ============================================================================= //
  GRVE.jReject = {
    init: function() {
      $.reject({
        reject: {
          msie: 10
        },
        imagePath: 'img/icons/jReject/',
        display: [ 'chrome','firefox','safari','opera' ],
        closeCookie: true,
        cookieSettings: {
          expires: 60*60*24*365
        },
        header: 'Ваш браузер устарел!',
        paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
        paragraph2: 'Пожалуйста, установите современный браузер:',
        closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
        closeLink: 'Закрыть это уведомление',
      });
    }
  };

  // # Show all columns
  // ============================================================================= //
  GRVE.showMore = {
    init: function() {
      $('[data-show-all]').on('click', function (e) {
        var target = $(this).data('show-all'), 
            $items = $(target); 
        $items.removeClass('gallery__col--hidden');
        $(this).stop().fadeOut(300);
        e.preventDefault();
      }); 
    }
  };

  GRVE.accordion = {
    init: function() {
      if( $( window ).width() >= 768 ) {
        $('#accordion > li').mouseover(
          function () {
            var $this = $(this);
            $this.stop().animate({'flex-grow' : '2'});
             $('.accordion__text',$this).addClass('accordion__text--hover');
             $('.accordion__img',$this).addClass('accordion__img--hover');
          });
        $('#accordion > li').mouseout(  
          function () {
            var $this = $(this);
            $this.stop().animate({'flex-grow':'1'});
            $('.accordion__text',$this).removeClass('accordion__text--hover');
            $('.accordion__img',$this).removeClass('accordion__img--hover');
        });
      }
    }
  };

  // # Initialize slick carousel
  // ============================================================================= //
  GRVE.slickInit = {
    init: function(){
      this.quoteCarousel();
      this.aboutCarousel();
      this.prayerCarousel();
    },
    quoteCarousel: function(){
      $('.js-quote-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        dots: true,
        adaptiveHeight: true,
        appendDots: $('.js-quote-dots'),
        mobileFirst: true,
        accessibility: false,
        swipeToSlide: '15',
        responsive: [
        {
          breakpoint: 1365,
          settings: {
            adaptiveHeight: false
          }
        }
        ]
      });
    },
    aboutCarousel: function(){
      $('.js-about-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.js-about-arrows'),
        prevArrow: '<button type="button" data-role="none" aria-label="Prev" role="button" class="slick-prev slick-arrow">Previous<svg class="svg svg--arrow-left slick-arrow__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" data-role="none" aria-label="Next" role="button" class="slick-next slick-arrow">Next<svg class="svg svg--arrow-right slick-arrow__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        infinite: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        mobileFirst: true,
        accessibility: false,
        swipeToSlide: '15',
        dots: false,
        responsive: [
        {
          breakpoint: 1365,
          settings: {
            adaptiveHeight: false
          }
        }
        ]
      });
    },
    prayerCarousel: function(){
      $('.js-prayer-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" aria-label="Prev" role="button" class="slick-prev slick-arrow">Previous<svg class="svg svg--arrow-left slick-arrow__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" data-role="none" aria-label="Next" role="button" class="slick-next slick-arrow">Next<svg class="svg svg--arrow-right slick-arrow__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        infinite: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        mobileFirst: true,
        accessibility: false,
        swipeToSlide: '15',
        dots: true,
        appendDots: $('.js-prayer-dots'),
        appendArrows: $('.js-prayer-arrows'),
        responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false
          }
        },
        {
          breakpoint: 1366,
          settings: {
            adaptiveHeight: false,
            dots: false
          }
        }
        ]
      });
    }
  };


  GRVE.navbar = {
    init: function() {
      this.$toggler =             $('[data-toggler]');
      this.target =               this.$toggler.data('toggler');
      this.$navbar =              $(this.target);
      this.$backdrop =            this.$navbar.find('.navbar__bg');
      this.$navbarLink =          this.$navbar.find('a.navbar__link[href*="#"]:not([href="#"])');
      this.$close =               this.$navbar.find(".navbar__close");
      this.navbarLinkActive =     "navbar__link--active";
      this.navbarTogglerOpen =    "nv-toggler--open";
      this.navbarOpen =           "navbar--open";
      self =                      this;

      this.$toggler.on('click', function() {
        $(this).toggleClass(self.navbarTogglerOpen);
        if (self.$navbar.hasClass(self.navbarTogglerOpen)) {
          self.showNavbar('hide');
        } else {
          self.showNavbar('show');
        }
      });

      this.$backdrop.on('click', function() {
        self.showNavbar('hide');
      });

      this.$navbarLink.on('click', function() {
        self.$navbarLink.removeClass(self.navbarLinkActive)
        $(this).addClass(self.navbarLinkActive);

        self.showNavbar('hide');
      });

      this.$close.on('click', function() {
        self.showNavbar('hide');
      });
    },
    showNavbar: function(status) {
      if (status === 'hide') {
        this.$toggler.removeClass(this.navbarTogglerOpen);
        this.$navbar.removeClass(this.navbarOpen);
      } else if (status === 'show') {
        this.$toggler.addClass(this.navbarTogglerOpen);
        this.$navbar.addClass(this.navbarOpen);
      }
    }
  };

  // # Basic Elements
  // ============================================================================= //
  GRVE.basicElements = {
    init: function() {
      this.carousel();
    },
    carousel: function() {

      var $element = $('.js-carousel');

      $element.each(function(){

        var $carousel = $(this),
          $nextNav = $carousel.find('.js-carousel-next'),
          $prevNav = $carousel.find('.js-carousel-prev'),
          sliderSpeed = ( parseInt( $carousel.attr('data-slider-speed') ) ) ? parseInt( $carousel.attr('data-slider-speed') ) : 3000,
          pagination = $carousel.attr('data-pagination') != 'no' ? true : false,
          paginationSpeed = ( parseInt( $carousel.attr('data-pagination-speed') ) ) ? parseInt( $carousel.attr('data-pagination-speed') ) : 400,
          autoHeight = $carousel.attr('data-slider-autoheight') == 'yes' ? true : false,
          autoPlay = $carousel.attr('data-slider-autoplay') != 'no' ? true : false,
          sliderPause = $carousel.attr('data-slider-pause') == 'yes' ? true : false,
          loop = $carousel.attr('data-slider-loop') != 'no' ? true : false,
          itemNum = parseInt( $carousel.attr('data-items')),
          tabletLandscapeNum = $carousel.attr('data-items-tablet-landscape') ? parseInt( $carousel.attr('data-items-tablet-landscape')) : 3,
          tabletPortraitNum = $carousel.attr('data-items-tablet-portrait') ? parseInt( $carousel.attr('data-items-tablet-portrait')) : 3,
          mobileNum = $carousel.attr('data-items-mobile') ? parseInt( $carousel.attr('data-items-mobile')) : 1,
          gap = $carousel.hasClass('js-with-gap') && !isNaN( $carousel.data('gutter-size') ) ? Math.abs( $carousel.data('gutter-size') ) : 0;

        // Carousel Init
        $carousel.owlCarousel({
          loop : loop,
          autoplay : autoPlay,
          autoplayTimeout : sliderSpeed,
          autoplayHoverPause : sliderPause,
          smartSpeed : 500,
          dots : pagination,
          responsive : {
            0 : {
              items : mobileNum
            },
            768 : {
              items : tabletPortraitNum
            },
            1024 : {
              items : tabletLandscapeNum
            },
            1200 : {
              items : itemNum
            }
          },
          margin : gap
        });

        $carousel.css('visibility','visible');

        // Go to the next item
        $nextNav.click(function() {
          $carousel.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $prevNav.click(function() {
          $carousel.trigger('prev.owl.carousel');
        })
      });
    },
  };

  $(document).ready(function(){ GRVE.documentReady.init(); });
  $(window).smartresize(function(){ GRVE.documentResize.init(); });
  $(window).on('load', function(){ GRVE.documentLoad.init(); });
  $(window).on('scroll', function() { GRVE.documentScroll.init(); });

})(jQuery); // End of use strict
