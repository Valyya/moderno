$(function() {
//  star отзывы
	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});



	// !!!должен быть перед // фильтр продукции mixitup
	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});



	// фильтр продукции
	var mixer = mixitup('.products__inner');


	$('.product-slider__inner').slick({
		dots: true,
		arrows:false,
		slidesToShow: 4,
		slidesToScroll: 2
	});



	
	

});
