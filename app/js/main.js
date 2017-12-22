
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
      GRVE.video.init();
      GRVE.videoModal.init();
      GRVE.tooltip.init();
    }
  };

  // # Document on Resize
  // ============================================================================= //
  GRVE.documentResize = {
    init: function() {
      GRVE.video.init();
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
            $items = $(target),
            delayStep = 100;

        $items.has(':hidden').each(function() {
          $(this).delay(delayStep).stop().fadeIn();
          delayStep += delayStep;
        }); 
        
        $(this).stop().fadeOut(300);
        e.preventDefault();
      }); 
    }
  };

  // # Calendar json source
  // ============================================================================= //

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

  GRVE.videoModal = {
    init: function() {
      $('#video__modal').on('shown.bs.modal', function() {
        $(".modal__iframe").attr('src', 'https://www.youtube.com/embed/czvmUmHyMW0?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
      });
      $('#video__modal').on('hidden.bs.modal', function() {
        $(".modal__iframe").attr('src', 'https://www.youtube.com/embed/czvmUmHyMW0?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
      });
    }
  };


  

  // # Anchor scrolling effect
  // ============================================================================= //
  GRVE.anchorScroll = {
    init: function($selector) {
      // Smooth scrolling using jQuery easing
      $selector.on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top +3)
            }, 1000,);
            return false;
          }
        }
      });
    }
  };


  // # Service section tolltip init
  // ============================================================================= //
  GRVE.tooltip = {
    init: function() {
      $('.js-tooltipstered').tooltipster({
        theme: 'tooltipster-shadow',
        animation: 'fade',
        delay: 25,
        side: 'top',
        maxWidth: 320
      });
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
      var $carousel      = $('.js-prayer-slider'),
          self           = this; 


      $carousel.on('init', function(event, slick, currentSlide = slick.currentSlide){
        self.setArrowsText(slick, currentSlide);
      });
      $carousel.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" aria-label="Prev" role="button" class="slick-prev slick-arrow"><span class="slick-arrow__circle"><svg class="svg svg--arrow-left slick-arrow__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></span><span class="slick-arrow__text">Предыдущий слайд</span></button>',
        nextArrow: '<button type="button" data-role="none" aria-label="Next" role="button" class="slick-next slick-arrow"><span class="slick-arrow__text">Следующий слайд</span><span class="slick-arrow__circle"><svg class="svg svg--arrow-right slick-arrow__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></span></button>',
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
            dots: false
          }
        }
        ]
      });

      $carousel.on('afterChange', function(event, slick, currentSlide) {
        self.setArrowsText(slick, currentSlide);
      });    

    },
    setArrowsText: function(slick, currentSlide) {
        var nextSlide             = (currentSlide === slick.slideCount - 1) ? 0 : currentSlide + 1,
            prevSlide             = (currentSlide === 0) ? slick.slideCount - 1 : currentSlide - 1,
            $prev                 = $(slick.$slides[prevSlide]),
            $next                 = $(slick.$slides[nextSlide]),
            prevArticleHeading    = $prev.find('[data-article]').data('article'),
            nextArticleHeading    = $next.find('[data-article]').data('article'),
            $arrows               = slick.$slider.next().find('.js-prayer-arrows'),
            $arrowPrevText        = $arrows.find('.slick-prev .slick-arrow__text'),
            $arrowNextText        = $arrows.find('.slick-next .slick-arrow__text');

        $arrowPrevText.html(prevArticleHeading);
        $arrowNextText.html(nextArticleHeading);
    }
  };

  GRVE.isWindowSize = {
    init: function(min = undefined, max = undefined) {
      var media;

      if (min !== undefined && max !== undefined) {
        media = matchMedia('only screen and (min-width: ' + min + 'px) and (max-width: ' + max + 'px)');
      } else if (min !== undefined && max === undefined) {
        media = matchMedia('only screen and (min-width: ' + min + 'px)');
      } else if (min === undefined && max !== undefined) {
        media = matchMedia('only screen and (max-width: ' + max + 'px)');
      } else {
        return true;
      }

      return media.matches;

    }
  };


  GRVE.video = {
    init: function(breakpoint = 767) {
      this.$video = $('.movie__video');

      if (GRVE.isWindowSize.init(0, breakpoint)) {
        this.clearVideoSize();
        return;
      }

      var windowWidth    = $( window).width() + 17,
          windowHalf     = windowWidth / 2,
          headerHeight   = $('.header__intro').height(),
          movieSize      = headerHeight;    

      if (windowHalf > headerHeight) {
        movieSize = windowHalf;
      }

      movieSize += 6;

      this.$video.css({
        'width': movieSize,
        'height': movieSize 
      });
    },
    clearVideoSize: function() {
      this.$video.css({
        'width': '',
        'height': '' 
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

      GRVE.anchorScroll.init(this.$navbarLink);
      this.togglerClick();
      this.backdropClick();
      this.navbarLinkClick();
      this.navbarCloseClick();

    },
    togglerClick: function() {
      this.$toggler.on('click', function() {
        $(this).toggleClass(self.navbarTogglerOpen);
        if (self.$navbar.hasClass(self.navbarTogglerOpen)) {
          self.showNavbar('hide');
        } else {
          self.showNavbar('show');
        }
      });
    },
    backdropClick: function() {
      this.$backdrop.on('click', function() {
        self.showNavbar('hide');
      });
    },
    navbarLinkClick: function() {
      this.$navbarLink.on('click', function() {
        self.$navbarLink.removeClass(self.navbarLinkActive)
        $(this).addClass(self.navbarLinkActive);

        self.showNavbar('hide');
      });
    },
    navbarCloseClick: function() {
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
