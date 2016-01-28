$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ["&#8249;","&#8250;"],
		autoplay: true,
	});
	if ( $(window).width() < 768 ) {
		$('.portfolio-wrapper').owlCarousel({
			loop: true,
			autoplay: true,
			center: true,
			items: 2
		});	
	} else {
		$('.portfolio-wrapper').owlCarousel({
			loop: true,
			autoplay: true,
			center: true,
			items: 4
		});
	}

	//google map in footer
	function initialize() {
	    var mapCanvas = document.getElementById('map');
	    var mapOptions = {
	    	center: new google.maps.LatLng(48.551087, 35.884840),
	    	zoom: 10,
	    	mapTypeId: google.maps.MapTypeId.ROADMAP,
	    	scrollwheel: false
	    }
	  	var map = new google.maps.Map(mapCanvas, mapOptions);

		var myLatLng = new google.maps.LatLng(48.551087,35.884840);
	  	var marker = new google.maps.Marker({
	    	position: myLatLng,
	    	map: map,
	    	title: 'Hello World!'
	    });
	  	marker.setMap(map);
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	$(window).resize(function() {
		var benefitWidth = $('.benefit-image-container').width();
		$('.benefit-image-container').css({'height': benefitWidth + 'px'});

		var portfilioItemWidth = $('.cell-column .view').width();
		$('.view').css({'height': portfilioItemWidth/1.5 + 'px'});

		var sliderNav = $('.owl-prev').height();
		$('.owl-prev, .owl-next').css({"width": sliderNav + 'px'});
	});

	var sliderNav = $('.owl-prev').height();
	$('.owl-prev, .owl-next').css({"width": sliderNav + 'px'});

	var benefitWidth = $('.benefit-image-container').width();
	$('.benefit-image-container').css({'height': benefitWidth + 'px'});

	var portfilioItemWidth = $('.cell-column .view').width();
	$('.view').css({'height': portfilioItemWidth/1.5 + 'px'});
});