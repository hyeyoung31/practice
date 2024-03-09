$(function () {
  
    $("#hamburger-menu").click(function () {
      $("#menu-container").animate({ marginLeft: "75%" }, 300);
      $(".cross").stop().show();
    });

      $(".accordion-toggle a ").click(function () {
        if ($(this).next().is(":visible")) {
            $(this).next().stop().slideUp(500);
            $(this).removeClass("active");

        } else {
            $(".menu-submenu").stop().slideUp(500);
            $(this).next().stop().slideDown(500);
            $(".accordion-toggle> a").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(" accordion-toggle a:before, .accordion-toggle a:after ").click(function () {
      return false;
    });

    $(".cross").click(function () {
      $("#menu-container").animate({ marginLeft: "0" }, 300);
      $("#hamburger-menu").stop().show();
      $(".cross").stop().hide();
    });

});
