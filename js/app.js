$(document).ready(function(){
	var down = false;

	$('.ryu').mouseenter(function () {
		if(!down) {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	})
	.mouseleave(function() {
		if(!down) {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		}
	});

	$('body').mousedown(function(){	
		down=true;
		playHadouken();	
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		
		$('.hadouken').finish().show().animate(
		  	{'left': '1320px'}, //destination
		  	600,  //time to get there
		  	function() {  //anonymous function to hide and reset
		    	$(this).hide();
		    	$(this).css('left', '520px');
		  	}
		);
		$('.ryu-throwing').show();
	})
	.mouseup(function(){
		down = false;
		//$('.ryu-ready').();
		$('.ryu-still').show();
		//$('.hadouken').hide();
		$('.ryu-throwing').hide();

	})
	.keydown(function(e){
		if(e.keyCode==88) {
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
		}
	})
	.keyup(function(e){
		if(e.keyCode==88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			$('.ryu-ready').hide();
		}
	});




}); //document ready

function playHadouken(){
	$('#hadouken-sound')[0].volume = .5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}