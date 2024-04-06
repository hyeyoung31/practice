// 배너
var swiper = new Swiper('.mainbanner', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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
spaceBetween: 5,
breakpoints: {
576: {
slidesPerView: 7,
spaceBetween: 30
},
1025: {
slidesPerView: 10,
spaceBetween: 40
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
});

const tabLinkActive = tabLink.filter('.active');
if (!tabLinkActive.length) {
  tabLink.first().trigger('click');
} else {
  tabLinkActive.trigger('click');
}



    var swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },

        slidesPerView: 1,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },

        },

    });



    // $('.pager span').click(function(){
    //     swiper.slideTo($(this).index());
    //     $('.pager span').removeClass('active');
    //     $(this).addClass('active');

        
    // });
 
 
