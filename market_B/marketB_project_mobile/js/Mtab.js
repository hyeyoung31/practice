
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
 