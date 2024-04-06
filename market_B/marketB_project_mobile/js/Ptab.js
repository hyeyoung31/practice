
const PtabLink = $('.Ptabs li a');
const PnestedLink = $('.Pnested-tabs li a'); 

PtabLink.on("click", function (e) {
  e.preventDefault();
  const target = $(this).attr('href');

  PtabLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass('active');

  const PnestedLinkActive = $(target).find('.Pnested-tabs li a.active');

  if (!PnestedLinkActive.length) {
    $(target).find('.Pnested-tabs li:first-child a').trigger('click');
  } else {
    PnestedLinkActive.trigger('click');
  }
});

PnestedLink.on("click", function (e) {
  e.preventDefault();
  const target = $(this).attr("href");
  PnestedLink.removeClass('active');
  $(this).addClass('active');
  $(target).addClass('active').siblings('.active').removeClass("active");
});

const PtabLinkActive = PtabLink.filter('.active');
if (!PtabLinkActive.length) {
    PtabLink.first().trigger('click');
} else {
    PtabLinkActive.trigger('click');
}
