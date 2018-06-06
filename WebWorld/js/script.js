menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";		
	} else {
		x.className = "topnav";
	}
}

$(document).ready(function(){
  $('.welcome').slick({
  	autoplay: true,
  	autoplaySpeed: 5000,
  	arrows: true,
  	dots: true,
  	initialSlide: 0,
  	responsive: [
    {
      breakpoint: 480,
      settings: {
      	dots: false,
       }
    },
    ]
  });
});
