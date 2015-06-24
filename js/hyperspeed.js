// Setup for different devices

var isWebKit = /Webkit/i.test(navigator.userAgent),
	isChrome = /Chrome/i.test(navigator.userAgent),
	isMobile = !!('ontouchstart' in window),
	isAndroid = /Android/i.test(navigator.userAgent);

// Setup default easing
$.fn.velocity.defaults.easing = "easeInOutSine";

// Generate a random number between min and max values

function random(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Create the dots

var dotsCount = isMobile ? (isAndroid ? 40 : 70) : (isChrome ? 200 : 125),
	dotsHtml = '',
	$count = $('#count'),
	$dots;

//Create dotsCount number of dot divs on the page
for (var i = 0 ; i< dotsCount ; i++) {
	dotsHtml += '<div class="dot"></div>';
}

$dots = $(dotsHtml);
$count.html(dotsCount);



//Setup view containers

$container = $('#space');
$description = $('#description');

var screenWidth = window.screen.availWidth,
	screenHeight = window.screen.availHeight,
	chromeHeight = screenHeight - document.documentElement.clientHeight;

//Define Z axis distance boundaries

var translateZMin = -800,
	translateZMax = 600;

$container
	.css('perspective-origin', screenWidth/2 + "px " + ((screenHeight + 0.45)-chromeHeight)+'px')
	.velocity({
		perspective: [ 215, 50 ],
		rotateZ: [5, 0],
		opacity: [ 0.85, 0.55 ]
	},
	{ 	duration: 800,
	 	delay: 3250,
	 	loop: 2 }
	);

