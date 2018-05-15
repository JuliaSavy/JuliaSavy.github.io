$(document).ready(function(){
  $('.sl').slick({
  	dots: true,
	infinite: false,
	speed: 600,
	slidesToShow: 1,
	});
  
  $('.mobile-tab').hide();

	$('#burg').on('click', function(){
		$('.mobile-tab').slideToggle(1000);
	})
});
