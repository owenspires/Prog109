
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var slide_interval = null
var wait_timeout = null
var slider = document.getElementById("slideport")
var slides = document.getElementsByClassName("carousel-img")
var scount = slides.length
var slide_tracker = 0
var port_left = document.getElementById("stage-left").offsetWidth
var port_right = document.getElementById("stage-right").offsetWidth
var body_width = document.body.clientWidth
var img_width = document.getElementById("init-img").offsetWidth
var port_width = body_width - port_left - port_right
var slide_padding = (port_width - img_width)
var slider_width = (slides.length * (img_width + slide_padding))
var slide_position = 0
var static_slider = 0
	
function init() {
  addEventListeners();
  positionElements();
  initAutoSlide();
}

function addEventListeners() {
  previous.addEventListener("click", function() {
    moveSlide('back');
  });
  next.addEventListener("click", function() {
    moveSlide('forward');
  });
}

function positionElements() {
	var ipos = 0
	static_slider = ((slider_width - (port_left + (port_width * 2) + slide_padding)) * -1)
	slider.style.left = static_slider.toString() + 'px'
	slider.style.left = (-980).toString() + 'px'
	for (z = 0; z < scount; z++) {
		if (z === 0) {
			ipos = slider_width - (port_left + port_right + slide_padding)
		} else {
			ipos -= port_width
		}
		slides[z].style.left = ipos.toString() + 'px'
	}
	
}

function initAutoSlide() {
	if (wait_timeout) {
		clearTimeout(wait_timeout);
	}
	if (slide_position >= slider_width - port_width) {
		slide_position = 0
		slider.style.left = static_slider.toString() + 'px'
	}
	slide_interval = setInterval(moveSlides,10,'forward');
}

function initSlidePause() {
	wait_timeout = setTimeout(initAutoSlide,10000)
}

function moveSlides(dir) {
	slide_position = dir === 'forward' ? slide_position + 3 : slide_position - 3
	slide_tracker = dir === 'forward' ? slide_tracker + 3 : slide_tracker - 3
	slider.style.left = (static_slider + slide_position).toString() + 'px';
	if (slide_tracker >= port_width) {
		slide_tracker = 0;
		clearInterval(slide_interval);
		initSlidePause()
	}
}


window.onload = init()