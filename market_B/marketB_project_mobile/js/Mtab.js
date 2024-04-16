$(function() {

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


// 아이콘메뉴
var swiper = new Swiper('.multiple', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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



// 탭
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
            spaceBetween: 20
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
  spaceBetween: 20
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

let lastScrollTop = 0;
let delta = 5;
const fixBox = document.querySelector('.bottom-nav');
const fixBoxHeight = fixBox.offsetHeight;
let didScroll;
window.onscroll = function(e) {
  didScroll = true;
};

setInterval(function(){
  if(didScroll){
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled(){
  let nowScrollTop = window.scrollY;
  if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
    return;
  }
  if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
    fixBox.classList.remove('show');
  }else{
    if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
      fixBox.classList.add('show');
    }
  }
  lastScrollTop = nowScrollTop;
}	

});




