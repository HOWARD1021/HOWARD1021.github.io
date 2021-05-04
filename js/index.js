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


var str = ["Front-End Developer?","Web Engineer?"];
var str1 = " Web Engineer?"
var i = 0;
var j = 0
function typing(func) {
		var divTyping = document.getElementById("divTyping");
		if (j === 2 ||i <= str[j].length  ) {
			if (j == 2) j =0
	// str.slice(start, end) 切片函数，切取数组中的从start到end的字符串，不修改原数组
	// start 参数必须要有，end 可以没有，默认数组最后一个
	divTyping.innerHTML = str[j].slice(0, i++) + "_";
	setTimeout("typing(()=>typing())", 200); // 递归调用
} else {
	// divTyping.innerHTML = str
	 // 结束打字，移除光标
	i = 0
	j++
	func()
}
}
function typing1() {
	// for(let j= 0;j<allarry.length; j++ ){
		  var divpong = document.getElementById("divTyping");
		//   divpong.innerHTML =""	  
		  // console.log(j)
		if (j <= str1.length) {
			// str1.slice(start, end) 切片函数，切取数组中的从start到end的字符串，不修改原数组
	// start 参数必须要有，end 可以没有，默认数组最后一个
	divpong.innerHTML = str1.slice(0, j++) + "_";
	setTimeout("typing1()", 200); // 递归调用
} else {
	divpong.innerHTML = str1; // 结束打字，移除光标
}
}
// }
// 该函数实际上不是一个个输出，只是后面的长度多一的字符串覆盖前面的字符串
		typing(()=>typing() );

	
//typing1();

const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "./css/dark-theme.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "./css/light-theme.css";
  }
});