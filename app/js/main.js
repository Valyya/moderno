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



	


	$('.product-slider__inner').slick({
		dots: true,
		arrows:false,
		slidesToShow: 4,
		slidesToScroll: 2
	});


	//для new-items.html
$('.icon-th-list').on('click', function(){
	$('.product__item').addClass('list');
	$('.icon-th-list').addClass('active');
	$('.icon-th-large').removeClass('active');
});
$('.icon-th-large').on('click', function(){
	$('.product__item').removeClass('list');
	$('.icon-th-large').addClass('active');
	$('.icon-th-list').removeClass('active');
	
});

// фильтр продукции
	var mixer = mixitup('.products__inner');	
	

});
