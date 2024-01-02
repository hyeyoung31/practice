$(function () {
  
    $("#hamburger-menu").click(function () {
      $("#menu-container").animate({ marginLeft: "75%" }, 300);
      $(".cross").stop().show();
    });



    $(".menu-list >li").click(function () {
      if ($(this).next().is(":visible")) {
        $(this).next().stop().slideUp(500);
        $(this).removeClass("active-tab");
        $(this).find("a").removeClass("active");

      } else {
        $(".menu-submenu").stop().slideUp(500);
        $(this).next().stop().slideDown(500);
        $(".menu-list >li").removeClass("active-tab");
        $(this).addClass("active-tab");
        $(".menu-list >li>a").removeClass("active");
        $(this).find("a").addClass("active");
      }
    });


    $(".cross").click(function () {
      $("#menu-container").animate({ marginLeft: "0" }, 300);
      $("#hamburger-menu").stop().show();
      $(".cross").stop().hide();
    });

});