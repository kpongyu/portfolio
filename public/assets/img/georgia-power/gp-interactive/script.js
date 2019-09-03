
	
	  var val = $('input[name=slider]').val();
	  
		
	/*desktop canvas*/	
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();
	  var staticstars = new Image();
	  var firstlight = new Image();
	  var secondlight =  new Image();
	  var thirdlight =  new Image();
	  var fourthlight = new Image();
	  var fifthlight = new Image();
	  var sixlight = new Image();
	  var images = [imageObj, staticstars, firstlight, secondlight, thirdlight, fourthlight, fifthlight, sixlight];   //the key
	  var count = images.length;
	  var position = [[0,0],[480,0],[516, 286],[827, 177],[977, 285], [717,293], [542,198], [803,262]];
	  var globalAlpha = [1,1,0,0,0,0,0,0];
		
	
	 
	  
		
	  imageObj.src = 'background.png';
	  staticstars.src = 'static-stars.png';
	  firstlight.src = 'light1.png';
      secondlight.src = 'light2.png';
	  thirdlight.src = 'light3.png';
	  fourthlight.src = 'light4.png';
	  fifthlight.src = 'light5.png';
	  sixlight.src = 'light6.png';
	
		
		
	/*mobile canvas*/	
	  var mcanvas = document.getElementById('mmyCanvas');
	  var mcontext = mcanvas.getContext('2d');
	  var mimageObj = new Image();
	  var mstaticstars = new Image();
	  var mfirstlight = new Image();
	  var msecondlight =  new Image();
	  var mthirdlight =  new Image();
	  var mfourthlight = new Image();
	  var mfifthlight = new Image();
	  var msixlight = new Image();
	  var msevenlight = new Image();
	  var mimages = [mimageObj, mstaticstars, mfirstlight, msecondlight, mthirdlight, mfourthlight, mfifthlight, msixlight];   //the key
	  var mcount = mimages.length;
	  var mposition = [[0,0],[0,263],[112, 542],[425, 432],[575, 542], [313,546], [141,454], [402,518]];
	  var globalAlpha = [1,1,0,0,0,0,0,0];
		
		
	  
	  mimageObj.src = 'mbackground.png';
	  mstaticstars.src = 'mstatic-stars.png';
	  mfirstlight.src = 'mlight1.png';
      msecondlight.src = 'mlight2.png';
	  mthirdlight.src = 'mlight3.png';
	  mfourthlight.src = 'mlight4.png';
	  mfifthlight.src = 'mlight5.png';
	  msixlight.src = 'mlight6.png';
	 
		
	imageObj.onload = staticstars.onload = firstlight.onload = secondlight.onload = thirdlight.onload = fourthlight.onload = fifthlight.onload = sixlight.onload = counter;	
	mimageObj.onload = mstaticstars.onload = mfirstlight.onload = msecondlight.onload = mthirdlight.onload = mfourthlight.onload = mfifthlight.onload = msixlight.onload = mcounter;	

  $('.slider').on('mouseover', function() { 
            $(".circle").hide();
        });

  
	 $("#mslider").on('mousemove', function(){
		 val = $('input[name=mslider]').val();
		 if(val<=10){
			globalAlpha = [1,1,val/10,0,0,0,0,0];
		 }else if (val > 10 && val <= 20){
			 globalAlpha = [1,1,1,(val-10)/10,0,0,0,0];
		 }else if (val > 20 && val <= 30){
			 globalAlpha = [1,1,1,1,(val-20)/10,0,0,0];
		 }else if (val > 30 && val <=40){
			  globalAlpha = [1,1,1,1,1,(val-30)/10,0,0];
		 }else if (val > 40 && val <=50){
			 globalAlpha = [1,1,1,1,1,1,(val-40)/10,0];
		 }else if (val > 50 && val <= 60){
			 globalAlpha = [1,1,1,1,1,1,1,(val-50)/10];
		 }
		 drawImages();
	 });
	$("#mslider").on('load', function(){
		 drawImages();
	});
	
	$("#mslider").on('touchmove', function(){
		
		 val = $('input[name=mslider]').val();
		 if(val<=10){
			globalAlpha = [1,1,val/10,0,0,0,0,0];
		 }else if (val > 10 && val <= 20){
			 globalAlpha = [1,1,1,(val-10)/10,0,0,0,0];
		 }else if (val > 20 && val <= 30){
			 globalAlpha = [1,1,1,1,(val-20)/10,0,0,0];
		 }else if (val > 30 && val <=40){
			  globalAlpha = [1,1,1,1,1,(val-30)/10,0,0];
		 }else if (val > 40 && val <=50){
			 globalAlpha = [1,1,1,1,1,1,(val-40)/10,0];
		 }else if (val > 50 && val <= 60){
			 globalAlpha = [1,1,1,1,1,1,1,(val-50)/10];
		 }
		 drawImages();
	 });
	
	 $("#slider").bind('mousemove keydown', function(){
		 val = $('input[name=slider]').val();
		 if(val<=10){
			globalAlpha = [1,1,val/10,0,0,0,0,0];
		 }else if (val > 10 && val <= 20){
			 globalAlpha = [1,1,1,(val-10)/10,0,0,0,0];
		 }else if (val > 20 && val <= 30){
			 globalAlpha = [1,1,1,1,(val-20)/10,0,0,0];
		 }else if (val > 30 && val <=40){
			  globalAlpha = [1,1,1,1,1,(val-30)/10,0,0];
		 }else if (val > 40 && val <=50){
			 globalAlpha = [1,1,1,1,1,1,(val-40)/10,0];
		 }else if (val > 50 && val <= 60){
			 globalAlpha = [1,1,1,1,1,1,1,(val-50)/10];
		 }
		 drawImages();
	 });
	
	$(document).on('swipeleft swiperight', function(e){
			e.stopPropagation();
    		e.preventDefault();
		});
	
	 function counter() {
    	count--;
    	if (count === 0) drawImages();
	 }
	  function mcounter() {
    	mcount--;
    	if (mcount === 0) drawImages();
	 }
	/// is called when all images are loaded
	function drawImages() {
    	for(i = 0; i < images.length; i++){
			context.globalAlpha = globalAlpha[i];
        	context.drawImage(images[i], position[i][0], position[i][1]);
			
			mcontext.globalAlpha = globalAlpha[i];
        	mcontext.drawImage(mimages[i], mposition[i][0], mposition[i][1]);
		}
		}
	
		
  //slider
  $.fn.WBslider = function() {
	return this.each(function() {
		var $_this = $(this),
			$_date = $('input', $_this),
			$_title = $('.number', $_this),
			thumbwidth = 10; 

		$_date.on('input change keyup', function() {
			var $_this = $(this),
			val = parseInt($_date.val(), 10);
			$_title.text( val );
			
			$(".peryearnumber").text(val*10).digits();
			$(".lifetimenumber").text(val*100).digits();
			$(".peryearkwh").text(val*12).digits();
			$(".lifetimekwh").text(val*148).digits();

			var pos = (val - $_date.attr('min'))/($_date.attr('max') - $_date.attr('min'));

			
			titlepos = Math.round( ( pos * ($_date.width()-25) ) - thumbwidth/4 );

			$_title.css({'left': titlepos});

			

		}).on('focus', function() {
			if ( isNaN( $(this).val() ) ) {
				$(this).val(0);
			}
		}).trigger('change');
		
		$(window).on('resize', function() {
			$_date.trigger('change');
		});
	});
};

$(function() {

	$('.slider-container').WBslider();

});

$(".arrow").click(function(){
	$(".disclaimer-details").toggle();
	$(this).toggleClass("rotate-180"); 
})
	
//number
$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}
$(".peryearnumber").digits();
$(".lifetimenumber").digits();
$(".peryearkwh").digits();
$(".lifetimekwh").digits();
