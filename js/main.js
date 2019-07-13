jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});

jQuery(document).ready(function($){
	//open interest point description
	$('.cd-single-point').children('a').on('click', function(){
		var selectedPoint = $(this).parent('li');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
		}
	});
	//close interest point description
	$('.cd-close-info').on('click', function(event){
		event.preventDefault();
		$(this).parents('.cd-single-point').eq(0).removeClass('is-open').addClass('visited');
	});

	//on desktop, switch from product intro div to product mockup div
	$('#cd-start').on('click', function(event){
		event.preventDefault();
		//detect the CSS media query using .cd-product-intro::before content value
		var mq = window.getComputedStyle(document.querySelector('.cd-product-intro'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		if(mq == 'mobile') {
			$('body,html').animate({'scrollTop': $($(this).attr('href')).offset().top }, 200); 
		} else {
			$('.cd-product').addClass('is-product-tour').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('.cd-close-product-tour').addClass('is-visible');
				$('.cd-points-container').addClass('points-enlarged').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
					$(this).addClass('points-pulsing');
				});
			});
		}
	});
	//on desktop, switch from product mockup div to product intro div
	$('.cd-close-product-tour').on('click', function(){
		$('.cd-product').removeClass('is-product-tour');
		$('.cd-close-product-tour').removeClass('is-visible');
		$('.cd-points-container').removeClass('points-enlarged points-pulsing');
	});
});








jQuery(document).ready(function($){
	//update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
	var MqL = 1070;

	//on desktop, switch from product intro div to product tour div
	
		event.preventDefault();
		$('header').addClass('slide-down');
		if($(window).width() < MqL) {
			$('body,html').animate({'scrollTop': $('#cd-product-tour').offset().top - 30 }, 200); 
		} else {
			$('.cd-main-content').addClass('is-product-tour');
			uploadVideo(jQuery('.cd-active'));
		}
	

	//update the slider - desktop only
	$('.cd-prev').on('click', function(event){
		event.preventDefault();
		var activeSlide = $('.cd-active');
		if(activeSlide.is(':first-child')) {
			//in this case - switch from product tour div to product intro div
			showProductIntro();
		} else {
			updateSlider(activeSlide, 'prev'); 
		}
	});
	$('.cd-next').on('click', function(event){
		event.preventDefault();
		var activeSlide = $('.cd-active');
		updateSlider(activeSlide, 'next'); 
	});

	$(document).keyup(function(event){
		if(event.which=='37' && $('.cd-main-content').hasClass('is-product-tour') ) {
			var activeSlide = $('.cd-active');
			
		} else if(event.which=='39' && $('.cd-main-content').hasClass('is-product-tour')) {
			var activeSlide = $('.cd-active');
			updateSlider(activeSlide, 'next');
		}
	});

	$(window).on('resize', function(){
		window.requestAnimationFrame(function(){
			if($(window).width() < MqL) {
				$('.cd-single-item').each(function(){
					$(this).find('img').css('opacity', 1).end().find('video').hide();
				});
			} else {
				$('.cd-single-item.cd-active').find('video').show();
				( $('.cd-main-content').hasClass('is-product-tour') ) ? $('header').addClass('slide-down') : $('header').removeClass('slide-down');
				uploadVideo(jQuery('.cd-active'));
			}
		});
	});
	$(window).on('scroll', function(){
		window.requestAnimationFrame(function(){
			if($(window).width() < MqL && $(window).scrollTop() < $('#cd-product-tour').offset().top - 30 ) {
				$('header').removeClass('slide-down');
			} else if ($(window).width() < MqL && $(window).scrollTop() >= $('#cd-product-tour').offset().top - 30 ){
				$('header').addClass('slide-down');
			}
		});
	});

	function showProductIntro() {
		$('header').removeClass('slide-down');
		$('.cd-main-content').removeClass('is-product-tour');
		$('.cd-active').find('video').get(0).pause();
		$('.cd-single-item').find('video').each(function(){
			$(this).get(0).currentTime = 0;
		});
	}

	function updateSlider(active, direction) {
		var selected;
		if( direction == 'next' ) {
			selected = active.next();
			//on Firefox CSS transition/animation fails when parent element changes visibility attribute
			//so we have to change .cd-single-item childrens attributes after having changed its visibility value
	        setTimeout(function() {
	           	active.removeClass('cd-active').addClass('cd-hidden').next().removeClass('cd-move-right').addClass('cd-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	           		active.addClass('cd-not-visible');
	           	});
	        }, 50);
		} else {
			selected = active.prev();
			//on Firefox CSS transition/animation fails when parent element changes visibility attribute
			//so we have to change .cd-single-item childrens attributes after having changed its visibility value
	        setTimeout(function() {
	           	active.removeClass('cd-active').addClass('cd-move-right').prev().addClass('cd-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	           		active.addClass('cd-not-visible');
	           	});
	        }, 50);
		}
		//update visible slider
		selected.removeClass('cd-not-visible');
		//update slider navigation (in case we reached the last slider)
        updateSliderNav(selected);
        //load the video for the new slider
		uploadVideo(selected);

	}

	function updateSliderNav(selected) {
		( selected.is(':last-child') ) ? $('.cd-next').addClass('cd-inactive') : $('.cd-next').removeClass('cd-inactive') ;
		( selected.is(':nth-child(0)') ) ? $('.cd-prev').addClass('cd-inactive') : $('.cd-prev').removeClass('cd-inactive') ;
		$('.cd-loader').stop().hide().css('width', 0);
	}

	function uploadVideo(selected) {
		selected.siblings('.cd-single-item').find('video').each(function(){
			//pause videos user is not watching
			$(this).get(0).pause();
		})
		if(selected.find('video').length > 0) {
			//video has been already loaded - play it
			selected.find('video').eq(0).show().get(0).play();
		} else {
			//load video - the name of the video is the data-video of the image
			var videoUrl = selected.find('.cd-image-container img').data('video'),
				video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" />Sorry, your browser does not support HTML5 video.</video>');
			video.appendTo(selected.find('.cd-image-wrapper')).hide();

			var loaded = 'false';
			//check if the canplaythrough event occurs - video is ready to be played
			selected.on('canplaythrough', 'video', function() {
				loaded = 'true';
			});

			//animate the loading bar
			$('.cd-loader').show().animate({width: '50%'}, 1500, function(){
				var timeout = setInterval(function(){
					if( loaded ){
						//this means the video is ready - complete .cd-loader and play the video
						$('.cd-loader').animate({width: '100%'}, 100, function(){
							$('.cd-loader').css('width', 0);
							selected.find('video').show().get(0).play();
							selected.find('img').css('opacity', 0);
							clearInterval(timeout);
						});
					} else {
						//video is not ready yet
						var windowWidth = $(window).width(),
							widthNew = $('.cd-loader').width() + 10;
						if(widthNew < windowWidth ) {
							$('.cd-loader').show().animate({width: widthNew+'px'}, 500);
						}
					}
				}, 500);
			});			
		}
	}
});