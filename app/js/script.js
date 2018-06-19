

$(window).on('load', function(){
	var heightToRemove;
	var windowHeight;
	var windowWidth;
	var lastImg;
	var interval;
	start();

	function start(){
		heightToRemove = $('.main-head').innerHeight() + $('.main-nav').innerHeight();
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
		lastImg = 1;

		$('.sl-wrapper').height(windowHeight - heightToRemove);
		$('.img-wrapper').height(windowHeight - heightToRemove);
		$('.sl').height(windowHeight - heightToRemove);
		$('.img-wrapper').width(windowWidth);
		$('.sl-wrapper').width($('.img-wrapper').width()*$('.img-wrapper').length);

		$('.moveLeft').click(reverseImg);

		$('.moveRight').click(passImg);

		interval = setInterval(passImg, 10000);
	};
	

	function moveToPosition(toAdd){
		if(toAdd === (1) && lastImg === $('.img-wrapper').length) lastImg = 0;
		if(toAdd === (-1) && lastImg === 1) lastImg = $('.img-wrapper').length-1;
		lastImg = lastImg + toAdd;
		$('.sl').css('left', (lastImg-1)*windowWidth*(-1));
		clearInterval(interval);
		interval = setInterval(passImg, 10000);
	}

	function passImg(){
		moveToPosition(1);
	}

	function reverseImg(){
		moveToPosition(-1);
	}
});