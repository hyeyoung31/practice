$(function(){
	
		$('#fullpage').fullpage({
				anchors: ['firstSection','secondSection','thirdSection','fourthSection','fifthSection', 'sixthSection'],
				sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				navigation: false,
  

                // afterLoad:function(anchorLink,index){
                //   console.log("현재 섹션 번호는" +index);
                //   if(index == 2){$('.collection1').fadeIn(300);
                //     } else {
                //         $('.collection1').fadeOut(300);
                //      };

                //    if(index == 3){$('.collection2').fadeIn();
                //     } else {
                //         $('.collection2').fadeOut();
                //      };

                    
                //     }
                //    });

                afterLoad:function(anchorLink,index){
                     if(index == 2){$('.collection1').fadeIn(500);
                      } else {
                          $('.collection1').fadeOut(500);
                       };
 
                      }
                     });
  


	     //풀메뉴 슬라이드
		 $("#pc_gnb li a").mouseenter(function(){
		 $("#t_menu").stop().slideDown(300);
		 });
		
		 $("#allmenu").mouseleave(function(){
		 $("#t_menu").stop().slideUp(300);
		 });
        

                     // afterSlideLoad: function(anchorLink, index, slideAnchor , slideIndex){
                //     console.log("현재 슬라이드 번호는" +slideIndex);
                //    },


		// 풀메뉴 호버시 배경 흰색, 글씨 검은색
		 $("#pc_gnb li a").mouseover(function(){ 
         $("#header").css("background","#fff"); 
        $("#pc_gnb li a").css("color","000"); 
         }); 

		 $("pc_gnb").mouseleave(function(){ 
         $("#header").css("background","none"); 
        $("pc_gnb li a").css("color","fff"); 
         }); 


		// 풀메뉴 section1 부터는 헤더 바탕이 흰색, 글씨 검은색
		//  $('#header').each(function() {
        //    const $window = $(window),
        //   header = $(this),
        //    headerClone = header.contents().clone();
        //    headerCloneContainer = $('<div id="header-clone"></div>');
        //    threshold = $("#section1").offset().top;
        //   headerCloneContainer.append(headerClone);
        //   headerCloneContainer.appendTo('body');
    
        //    $window.on('scroll',function (){
        //     if ($window.scrollTop() >threshold) {
        //     headerCloneContainer.show();
        //     }else {
        //    headerCloneContainer.hide();
        //    }
        //     });
    

        //    });

		//햄버거 메뉴


        $(function(){
            $( "#hamburger_icon" ).click(function() {
            $("#m_menu").animate({marginLeft:"75%"}, 300);
		    $(".cross").stop().show();
          });	
    

   
           $(".accordion-toggle a ").click(function(){
          if($(this).next().is(":visible"))
           {
              $(this).next().stop().slideUp(500);
            //   $(this).removeClass("active-tab");
              $(this).removeClass("active");
               
          }else{
            $(".menu-submenu").stop().slideUp(500);
            $(this).next().stop().slideDown(500);
            // $(".menu-list >li").removeClass("active-tab");
            // $(this).addClass("active-tab");
            $(".accordion-toggle> a").removeClass("active");
            $(this).addClass("active"); 
             }
             });
            });

            $( ".cross" ).click(function() {
                $("#m_menu").animate({marginLeft:"0"}, 300);
                $( "#hamburger_icon" ).stop().show();
                    $(".cross").stop().hide();
           });
        
           
           });


