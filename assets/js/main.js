(function($) {

	'use strict';

  $('.site-menu-toggle').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});



	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

  // aos
  AOS.init({
    duration: 1000
  });

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        dots: true,
        nav:true,
        loop:false
      }
  	}
	});

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }
  siteStellar();

  var smoothScroll = function() {
    var $root = $('html, body');

    $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });
  }
  smoothScroll();

 var dateAndTime = function() {
    $('#m_date').datepicker({
       'language': 'fr',
  'format': 'dd/mm/yyyy',
  'autoclose': true,
  'todayHighlight': true
    });
    $('#checkin_date, #checkout_date').datepicker({
       'language': 'fr',
  'format': 'dd/mm/yyyy',
  'autoclose': true,
  'todayHighlight': true
    });

    $.fn.datepicker.defaults.language = 'fr';
  };


  dateAndTime();

  var windowScroll = function() {

    $(window).scroll(function(){
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-site-header').addClass('scrolled');
      } else {
        $('.js-site-header').removeClass('scrolled');
      }

    });

  };
  windowScroll();


  var goToTop = function() {

    $('.js-gotop').on('click', function(event){
      
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      
      return false;
    });

    $(window).scroll(function(){

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });
  
  };


})(jQuery);



document.getElementById("reservationForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let checkin = document.getElementById("checkin_date").value;
    let checkout = document.getElementById("checkout_date").value;
    let type = document.getElementById("type").value;
    let method = document.getElementById("method").value;

    if(checkin=='' || checkout=='' || type=='' || method=='')
    {
      alert("Réservation non valide");
      return;
    }



    let message =
`Bonjour,
Je souhaite réserver une chambre.

Date d'arrivée : ${checkin}
Date de départ : ${checkout}
Type de chambre : ${type}

Merci.`;

    // WHATSAPP
    if(method === "whatsapp") {

        let phone = "212666848247"; // replace with your WhatsApp number

        let whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    }

    // EMAIL
    else {

        let email = "contact@ait-ouariba.com"; // replace with your email

        let subject = "Nouvelle réservation";

        let mailURL =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.open(mailURL, "_blank")
       // window.location.href = mailURL;
    }

});


document.getElementById("contactWhatsappForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("contact_name").value;

    let phone =
    document.getElementById("contact_phone").value;

    let message =
    document.getElementById("contact_message").value;

    if(message=='' || phone=='' || name=='')
    {
      alert("Entrées non valides");
      return;
    }

    let text =
`Bonjour,

Nom : ${name}
Téléphone : ${phone}

Message :
${message}`;

    // Replace with your WhatsApp number
    let whatsappNumber = "212666848247";

    let whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

});


// Coordinates
        var lat = 32.533879;
        var lng = -3.451960;

        // Create map
        var map = L.map('map').setView([lat, lng], 13);

        // OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Marker
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup("Maison d'hôtes AÏT OUARIBA")
            .openPopup();
