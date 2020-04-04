// initial 	
	$(document).ready(function(){
	$('.sidenav').sidenav({
	edge:'right',
	preventScrolling:false  
	});
	$('.materialboxed').materialbox();
	$('.parallax').parallax()
	$('.tabs').tabs();
	$('.datepicker').datepicker({

	})
	$('.tooltipped').tooltip();
	$('.scrollspy').scrollSpy();
	$('.slider').slider({
	// 不顯示操控圓鈕
	indicators: false,
	// 每張照片播五秒
	interval: 5000
	});
	$('.carousel.carousel-slider').carousel({
	fullWidth: true,      
	indicators: true
	});
	});
// animation
const nav = document.querySelector('nav')
const navHeight = nav.offsetHeight
// Handle navbar animation
function changenav(){
	if(window.pageYOffset>navHeight){
		return nav.classList.add('blue-grey','darken-3','shadow')
	}nav.classList.remove('blue-grey','darken-3','shadow')
}

window.addEventListener('scroll',()=>{
	changenav()
})