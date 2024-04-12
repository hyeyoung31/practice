

var totalSlide = $('.mainbanner .swiper-slide').length;
var fragment = document.querySelector('.mainbanner .swiper-pagination');

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
const tabLink = $('.Mtabs li a');
const nestedLink = $('.Mnested-tabs li a'); 


tabLink.on("click", function (e) {
  e.preventDefault();
  const target = $(this).attr('href');

  tabLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass('active');

  const nestedLinkActive = $(target).find('.Mnested-tabs li a.active');

  if (!nestedLinkActive.length) {
    $(target).find('.Mnested-tabs li:first-child a').trigger('click');
  } else {
    nestedLinkActive.trigger('click');
  }
});

nestedLink.on("click", function (e) {
  e.preventDefault();
  const target = $(this).attr("href");
  nestedLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass("active");
  var activetabContents = $(target).addClass('active')
   console.log(activetabContents);
});

const tabLinkActive = tabLink.filter('.active');
if (!tabLinkActive.length) {
  tabLink.first().trigger('click');
} else {
  tabLinkActive.trigger('click');
}



  // //1. Swiper 인스턴스 생성하는방법
  // const swiperOptions = {
  //   loop: true, // 슬라이드 루프
  //   pagination: {
  //     el: '.swiper-pagination', // 페이지 번호 요소
  //     clickable: true // 페이지 번호 클릭 가능 여부
  //   },
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //       breakpoints: {
  //         576: {
  //           slidesPerView: 2,
  //           spaceBetween: 20
  //         }
    
  // }};

  // // 각 .Mnested-content에 Swiper 적용
  // $('.Mnested-content').each(function () {
  //   console.log('.Mnested-content');
  //   const swiper = new Swiper(this, swiperOptions);
  // });

  // const swiperNested8 = new Swiper('#Mnested8', swiperOptions);
  // const swiperNested9 = new Swiper('#Mnested9', swiperOptions);
  // const swiperNested10 = new Swiper('#Mnested10', swiperOptions);
  // const swiperNested11 = new Swiper('#Mnested11', swiperOptions);
  // const swiperNested12 = new Swiper('#Mnested12', swiperOptions);
  // const swiperNested13 = new Swiper('#Mnested13', swiperOptions);
  // const swiperNested14 = new Swiper('#Mnested14', swiperOptions);
  // const swiperNested15 = new Swiper('#Mnested15', swiperOptions);
  // const swiperNested16 = new Swiper('#Mnested16', swiperOptions);
  // const swiperNested17 = new Swiper('#Mnested17', swiperOptions);





// 두번째 방법 실패
// tabContents = document.querySelectorAll('.Mnested-content');
// var activetabContents = [];


// tabContents.forEach(function(content) {
//   if (content.classList.contains('active')) {
//     activetabContents.push(content);
//   }
// });

// activetabContents.forEach(function(content) {
//   var swiper = new Swiper(content, {
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     slidesPerView: 1,
//     spaceBetween: 20,
//     breakpoints: {
//       576: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       }
//     }
//   });
// });


// 세번째 방법


// var swiper = new Swiper('.Mnested-content', {
//   direction: 'horizontal',
//   loop: true,

//   slidesPerView: 1,
//     spaceBetween: 20,
//     breakpoints: {
//       576: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       }

// }
// });

// 네번째
tabContents = document.querySelectorAll('.Mnested-content');

tabContents.forEach(function(content) {
    var swiper = new Swiper(content, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    })

  });

  var swiper = new Swiper('.sub-banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  });


  var swiper = new Swiper('.magazine-wrapper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
spaceBetween: 18,
breakpoints: {
576: {
  slidesPerView: 2,
  spaceBetween: 20
  },
 1025: {
    slidesPerView: 3,
    spaceBetween: 20
    },

  }

});
  
  
