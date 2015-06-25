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

var screenWidth = document.getElementById('space').offsetWidth,
	screenHeight = document.getElementById('space').offsetHeight
console.log("width", screenWidth)
console.log("height", screenHeight)
//Define Z axis distance boundaries

var translateZMin = -725,
	translateZMax = 600;

$container
	.css('perspective-origin', $container.width() + "px " + ($container.height())+'px')
	.velocity({
		perspective: [ 215, 50 ],
		opacity: [ 0.85, 0.55 ]
	},
	{ 	duration: 800,
	 	delay: 3250,
	 	loop: 2 }
	);

$dots
	.velocity({
		translateX : [
			function(){ return "+=" + random(-$container.width()/2.5, $container.width()/2.5) },
			function(){ return random(0,$container.width()) }
		],
		translateY : [
			function(){ return "+=" + random(-$container.height()/2.75, $container.height()/2.75) },
			function(){ return random(0, screenHeight) }
		],
		translateZ: [
			function(){ return "+=" + random(translateZMin, translateZMax) },
			function(){ return random(translateZMin, translateZMax) }
		],
		opacity: [
			function(){ return Math.random() },
			function(){ return Math.random() + 0.1 }
		]

	},{ duration : 10000})
	.velocity("reverse", { easing: "easeOutQuad" })
	.appendTo($container);




























