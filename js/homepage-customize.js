var height = $("#canvas").height();
$('#second').css("margin-top", height-100);
$('#calltoaction').css("margin-top", height-150);

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});



function changeAttr(attr){
	$('#heroimage').attr("data-ibg-bg") = attr;
	
}




function openNav() {
    document.getElementById("myNav").style.height = "100%";
	$('#calltoaction').css("display",'none');
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
	$('#calltoaction').css("display",'block');
}