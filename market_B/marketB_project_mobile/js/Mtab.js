$(function() {

  var wind = $(window),
MtabBar = $('.bottom-nav');
 console.log(wind. scrollTop());

  wind.scroll(function(){
    if( wind.scrollTop() >= 100){
      MtabBar.addClass('show');
    }else{
      MtabBar.removeClass('show');
    }
   });
   
var totalSlide = $('.mainbanner .swiper-slide').length;
var fragment = document.querySelector(' .banner-pagination');

fragment.innerHTML = ('<span style="color:white;">' + 1 + '</span> <span class="mainbanner_bar"></span> ' + totalSlide);

var swiper = new Swiper('.mainbanner', {
  // Optional parameters
  slidesPerView: 1,
  // spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  loopedSLides: 3,
  simulateTouch: true,
  grabCursor: true,
  speed: 800,
  loopAdditionalSlides: 1,
  pagination: {
    el: '.swiper-progressbar',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      fragment.innerHTML = ('<span style="color:white;">' + (this.realIndex + 1) + '</span> <span class="mainbanner_bar"></span> ' + totalSlide);
    }
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

let play = $('.start');
let pause = $('.pause');
  
pause.on('click', function () {
  swiper.autoplay.stop();
  pause.removeClass('active');
  play.addClass('active');
});

play.on('click', function () {
  swiper.autoplay.start();
  play.removeClass('active');
  pause.addClass('active');
})

var swiper = new Swiper('.multiple', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
      nextEl: '.next',
      prevEl: '.prev',
  },
  slidesPerView: 5,
spaceBetween: 20,
breakpoints: {
440: {
    slidesPerView: 5,
    spaceBetween: 25
    },
540: {
      slidesPerView: 5,
      spaceBetween: 30
      },
576: {
  slidesPerView: 6,
  spaceBetween: 20
  },
770: {
      slidesPerView: 7,
      spaceBetween: 30
      },
992: {
  slidesPerView: 8,
  spaceBetween: 35
  },
1200: {
slidesPerView: 9,
spaceBetween: 30
},
1400: {
  slidesPerView: 10,
  spaceBetween: 30
  }
}

});

$('#prev').click(function(){
  swiper.slidePrev();
});

$('#next').click(function(){
  swiper.slideNext();
});

  let tabLink = $('.Mtabs li a');
  let nestedLink = $('.Mnested-tabs li a');

  tabLink.on("click", function (e) {
      e.preventDefault();
      let target = $(this).attr('href');

      tabLink.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active').siblings('.active').removeClass('active');

      $(target).find('.Mnested-tabs li:first-child a').trigger('click');
  });

  nestedLink.on("click", function (e) {
      e.preventDefault();
      let target = $(this).attr("href");

      nestedLink.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active').siblings('.active').removeClass("active");


  });

  const tabLinkActive = tabLink.filter('.active');
  if (!tabLinkActive.length) {
      tabLink.first().trigger('click');
  } else {
      tabLinkActive.trigger('click');
  }

 
  const swiperOptions = {
    loop: true, 
    pagination: {
      el: '.swiper-pagination', 
      clickable: true 
    },
    slidesPerView: 1,
    spaceBetween: 20,
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          }
    
  }};

 
  $('.Mnested-content').each(function () {
    console.log('.Mnested-content');
    const swiper = new Swiper(this, swiperOptions);
  });


  var swiper = new Swiper('.sub-banner', {
    slidesPerView: 1,
    loop: true,
    loopedSLides: 3,
    simulateTouch: true,
    grabCursor: true,
    speed: 800,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
  
  
  });
  

  var swiper = new Swiper('.magazine-wrapper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true 
    },
    slidesPerView: 2,
spaceBetween: 20,
breakpoints: {
576: {
  slidesPerView: 2,
  spaceBetween: 25
  },
 1025: {
    slidesPerView: 3,
    spaceBetween: CalculateSpaceBetween(),
    },
  }
});

function CalculateSpaceBetween() {
  var containerWidth = document.querySelector('.magazine-wrapper').offsetWidth;
  var spacePercentage = 5;
  var spaceBetween = containerWidth * (spacePercentage / 100);
  return spaceBetween;
}


$( ".hamburger" ).click(function() {
  $(".mt-menu").animate({marginLeft:"100%"}, 300);
$( ".hamburger" ).hide();
$( ".cross" ).show();
});

$( ".cross" ).click(function() {
  $(".mt-menu").animate({marginLeft:"0px"}, 300);
$( ".cross" ).hide();
$( ".hamburger" ).show();
});


var Mmenu = {
  clickE:function(target) {
    var $target = $(target);


    $target.on('click', 'a', function(){

      var $this = $(this);
      var $depthTarget = $this.next(); //ul
      var $siblings = $this.parent().siblings(); //li
  
      if($(this).next().is(":visible")){
        $depthTarget.stop().slideUp(500);
        $(this).children("img").attr("src","img/arrow-down.png");
        }else{
         $siblings.stop().slideUp(500);
         $depthTarget.stop().slideDown(500);
        $(this).children("img").attr("src","img/arrow-up.png");
      };	
       });
  }
}
Mmenu.clickE('.menu-list li')

});


