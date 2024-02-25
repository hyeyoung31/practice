$(function () {

    const tabLink = $('.tabs li a'); // 메인 탭 앵커 태그
    const nestedLink = $('.nested_tabs li a'); // 서브 탭 앵커 태그
    // const tabNavLi = $('.tab_nav li'); // 메인 탭 리스트
    

     
    // 메인 탭 클릭 이벤트 핸들러
    tabLink.on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
  
      // 해당 메인 탭 활성화
  
      tabLink.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active').siblings('.active').removeClass('active');

      
      //네스티드 탭 유지 또는 첫 번째 네스티드 탭 활성화
      const nestedLinkActive = $(target).find('.nested_tabs li a.active');

      if (!nestedLinkActive.length) {
          $(target).find('.nested_tabs li:first-child a').trigger('click');
      } else {
        nestedLinkActive.trigger('click');
      }
  });
    
   
     // 네스티드 탭 클릭 이벤트 핸들러
     nestedLink.on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");
  
      // 해당  네스티드 링크 활성화
      nestedLink.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active').siblings('.active').removeClass("active");

  });
  
    // 페이지 로드 시 첫 번째 탭 활성화
    const tabLinkActive = tabLink.filter('.active');
    if (!tabLinkActive.length) {
      tabLink.first().trigger('click');
    } else {
      tabLinkActive.trigger('click');
    }

});
