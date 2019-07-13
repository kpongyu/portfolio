



$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });

//     $('#labs_vid').videoBG({
//   mp4:'img/labs_vid.mp4',
//   // ogv:'tunnel_animation.ogv',
//   // webm:'tunnel_animation.webm',
//   poster:'img/labs_prototype.jpg',
//   scale:true,
//   zIndex:0,

// });

    
});


$(function(){
  $('#mixboard').mixItUp();
});

$(function(){
  $( ".work-preview" ).bind( "tap", tapHandler );
 
  function tapHandler( event ){
    $(".work-description").addClass("tap");
  }
  $( "work-description" ).bind( "tap", tapHandler );
 
  function tapHandler( event ){
    $(".work-preview").addClass("tap");
  }
});

$(document).ready(function(){

    $('.sticky_outer').stop().animate({top:0});
	$('.sticky_logo_solid').fadeOut(0);
	
// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.to-top').fadeIn();
			} else {
 				$('.to-top').fadeOut();
		}
		});

		// scroll body to 0px on click
 		$('.to-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
		}, 800);
 			return false;
		});
	});

});
$(document).ready(function(){
	
	
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.to-top').fadeIn();
		} else {
			$('.to-top').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

  // $('video').each(function(){
  //   if ($(this).is(":in-viewport")) {
  //       $(this)[0].play();
  //   } else {
  //       $(this)[0].pause();
  //   }
  // });

//Place sticky logo in center
  $('.sticky_logo').css("left", $(window).width()*0.5-0.5*$('.sticky_logo').width() -2);
  // console.log($(window).width());

//Place sticky logo in center on window resize
  $(window).resize(function(){
    $('.sticky_logo').css("left", $(window).width()*0.5-0.5*$('.sticky_logo').width() -2);
    // console.log($(window).width());

    // if($(window).width()<640){
    //   $('.hover_trigger').css("display","none")
    // }
  });

  $('.sticky_logo').hover(function(event){
    event.stopPropagation();
    if($('.sticky_outer').attr("top")!=0){
      $('#dim_overlay').css("display","block");
      $('.sticky_logo_solid').fadeOut(200);
      $('.sticky_outer').animate({top:0},{queue:false});
      
      $('#dim_overlay').animate({opacity:0.5},{queue:false});
      $('.sticky_logo').animate({width:80},{queue:false}).animate({left:$(window).width()*0.5-40 -2},{queue:false});

       
    }
  });
  $('#dim_anchor').hover(function(event){
    event.stopPropagation();
    // console.log("hover");
    if($('.sticky_outer').attr("top")!==0){

      $('.sticky_logo_solid').fadeIn(800);
      $('#dim_overlay').animate({opacity:0},{queue:false, complete: function(){$('#dim_overlay').css("display","none");}  }  );
      $('.sticky_outer').animate({top:0},{queue:false});
      $('.sticky_logo').animate({width:90},{queue:false}).animate({left:$(window).width()*0.5-50 -2},{queue:false});
     

       
    }
  });

// boards animations
 //  $('.hover_trigger_1').hover(function(event){
 //    event.stopPropagation();
 //    console.log("hovering");
 //    $('.interactive_layer').css("opacity","block");
 //    $('.boards_4').animate({opacity:1},{duration:800},{queue:false});
 //    $('.interactive_fadeout').animate({opacity:0},{queue:false});
 //  });

 // $('.hover_trigger_1').mouseout(function(event){
 //    event.stopPropagation();
 //    console.log("hovering");
 //    $('.boards_4').animate({opacity:0},{queue:false, complete: function(){$('.interactive_layer').css("display","none");}  }  );
 //    $('.interactive_fadeout').animate({opacity:1},{duration:800},{queue:false});
 //  });
if($(window).width()>640){

$('.hover_trigger').mouseenter(function(event){
  event.stopPropagation();
  clearTimeout($(this).data('timeoutId'));
  $('.interactive_fadeout').fadeOut();
}).mouseleave(function(){
  $('.interactive_fadeout').fadeIn(1200);
  timeoutId = setTimeout(function(){
            $('.interactive_layer').fadeOut(300);
        }, 650);
  
});




  $('.hover_trigger_1').mouseenter(function(event){
    event.stopPropagation();
    console.log("hovering_1");
    $('.interactive_layer').css("display","block");
        // $('.boards_5').css("opacity","0");$('.boards_6').css("opacity","0"); 
    $('.boards_4').animate({opacity:1},{duration:800},{queue:false});
    //$('.interactive_fadeout').animate({opacity:0},{queue:false});
  }).mouseleave(function(){
    event.stopPropagation();
    console.log("hovering_1");
    $('.boards_4').animate({opacity:0},{queue:false});

      timeoutId = setTimeout(function(){
            $('.boards_4').css("opacity","0");
        }, 300);
  });


  $('.hover_trigger_2').mouseenter(function(event){
    event.stopPropagation();
    console.log("hovering_2");
    $('.interactive_layer').css("display","block");
        // $('.boards_5').css("opacity","0");$('.boards_6').css("opacity","0"); 
    $('.boards_5').animate({opacity:1},{duration:800},{queue:false});
    //$('.interactive_fadeout').animate({opacity:0},{queue:false});
  }).mouseleave(function(){
    event.stopPropagation();
    console.log("hovering_2");
    $('.boards_5').animate({opacity:0},{queue:false});

      timeoutId = setTimeout(function(){
            $('.boards_5').css("opacity","0");
        }, 300);
  });


  $('.hover_trigger_3').mouseenter(function(event){
    event.stopPropagation();
    console.log("hovering_3");
    $('.interactive_layer').css("display","block");
        // $('.boards_5').css("opacity","0");$('.boards_6').css("opacity","0"); 
    $('.boards_6').animate({opacity:1},{duration:800},{queue:false});
    //$('.interactive_fadeout').animate({opacity:0},{queue:false});
  }).mouseleave(function(){
    event.stopPropagation();
    console.log("hovering_1");
    $('.boards_6').animate({opacity:0},{queue:false});

      timeoutId = setTimeout(function(){
            $('.boards_6').css("opacity","0");
        }, 300);
  });

}//window.width()>=640 ends

 //   $('.hover_trigger_3').mouseover(function(event){
 //    event.stopPropagation();
 //    console.log("hovering_3");
 //    $('.interactive_layer').css("display","block");
 //    $('.boards_6').animate({opacity:1},{duration:800},{queue:false});
 //  });
 // $('.hover_trigger_3').mouseout(function(event){
 //    event.stopPropagation();
 //    console.log("hovering_3");
 //    $('.boards_6').animate({opacity:0},{queue:false});
 // });
   


        // var sliderScrollH = $( '.sticky_logo' ).position().top;
        $(window).bind('scroll', function() {
          // console.log($(window).scrollTop());
          // var sliderHeight = sliderScrollH - 53;
               if ($(window).scrollTop() > 300) {
                  if($('.sticky_outer').attr("top")!=-50){
                   $('.sticky_outer').stop().animate({top:-50});
                  }
               }
               else if($(window).scrollTop()==0) {
                  if($('.sticky_outer').attr("top")!=0){
                   $('.sticky_outer').stop().animate({top:0});
                  }
               }
        });
	
});

// $(function() {
// 		// ------------------------------
// 		// remove click delay on touch devices
// FastClick.attach(document.body);
// });





window.onload = function() { 
$(".load_bg").delay(250).fadeOut(); //
}; 


		(function() {

			
			
			// Fake loading time..
			var startTime = new Date().getTime();
			imagesLoaded(document.querySelector('main'), function() {
				var elapsed = new Date().getTime() - startTime,
					initFn = function() {
						document.body.classList.remove('loading');
						setTimeout(init, 50);
					};

				if( elapsed > 2000) {
					initFn();
				}
				else {
					setTimeout(initFn, 1000);
				}
			});

		})();
