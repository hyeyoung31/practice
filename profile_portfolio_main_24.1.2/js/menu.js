$(function () {
  
    $("#hamburger-menu").click(function () {
      $("#menu-container").animate({ marginLeft: "75%" }, 300);
      $(".cross").stop().show();
    });

    
    $(".menu-list #nav3").click(function () {
      if ($(this).next().is(":visible")) {
        $(this).next().stop().slideUp(500);
        $(this).find("a").removeClass("active");

      } else {
        $(this).next().stop().slideDown(500);
        $(this).find("a").addClass("active");
      }
    });

    $(" ccordion-toggle a:before, .accordion-toggle a:after ").click(function () {
      return false;
    });




    $(".cross").click(function () {
      $("#menu-container").animate({ marginLeft: "0" }, 300);
      $("#hamburger-menu").stop().show();
      $(".cross").stop().hide();
    });

});
