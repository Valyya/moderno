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
		slidesToScroll: 2,
		responsive: [
			{
			  breakpoint: 1860,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				
			  }
			},
			{
			  breakpoint: 1415,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				
			  }
			},
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	});


	//для new-items.html
$('.icon-th-list').on('click', function(){
	$('.product__item').addClass('list');
	$('.product-page__items').css('maxHeight', '1150px');
	$('.icon-th-list').addClass('active');
	$('.icon-th-large').removeClass('active');
});
$('.icon-th-large').on('click', function(){
	$('.product__item').removeClass('list');
	$('.product-page__items').css('maxHeight', '');
	$('.icon-th-large').addClass('active');
	$('.icon-th-list').removeClass('active');
	
});


// .menu__btn
 $('.menu__btn').on('click', function(){
	$('.menu__list').slideToggle();
 });

$('.header__btn-menu').on('click', function(){
	$('.header__box').toggleClass('active');
 });

 $('.product-one__tabs .tab').on('click', function(event) {
	var id = $(this).attr('data-id');
		$('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product-one__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#'+id).addClass('active-tab').fadeIn();
		return false;
	});


 


// фильтр продукции !! писать ТОЛЬКО в конце кода
	var mixer = mixitup('.products__inner-box');	
	

});
