(function($) {
  
  $("#nav-left").hover(function(){
      $(this).find('.nav-logo img').attr("src", function(index, attr){
          return attr.replace(".svg", "-color.svg");
      });
  }, function(){
      $(this).find('.nav-logo img').attr("src", function(index, attr){
          return attr.replace("-color.svg", ".svg");
      });
  });

  $(window).scroll(function(){
    $(".fadeout-on-scrolldown").css("opacity", 1 - $(window).scrollTop() / 400);
  }); 

  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  }

/*
  $('.searchform-flyout').on('mouseenter mouseleave click tap', function(event) {
    if (!$('#searchform-flyout').is(':visible')) {
      $('#searchform-flyout').toggleClass("show");
    }
  });  */  
 
  
  $('.question-slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    fade: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });
  
  
  $('.hero-slider').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    fade: true,
    arrows: true,
    autoplay: true,
    cssEase: 'linear'
  });

  /* Animate On Scroll Library */   
  AOS.init();  
  
  $( window ).resize(function() {
    AOS.refresh();
  });  
    
  
  $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("active");
  });      
    
  /* WOW */
  if ($(window).width() > 992) {
    new WOW().init(); 
  }
  
  /* RELLAX */
  //if (!navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
  //if (!navigator.userAgent.match(/(iPod|iPhone)/)) {    
    var rellax = new Rellax('.rellax', {

    });        
  //}   
  

  // MAGNIFIC POPUP
  $('.popup-image').magnificPopup({
    type:'image',
    closeOnContentClick: true
  });   

  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });    

  $('.iframe-popup-link').magnificPopup({
    type: 'iframe',
    iframe: {      
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: '//www.youtube.com/embed/%id%?autoplay=1' 
          }
        }  
    },      
    // other options
  });  

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });    
  
  // Wrap every letter in a span
  var ml6 = document.querySelector('.ml6');
  if(ml6) {
    $('.ml6').wrapInner( "<div class='text-wrapper'></div>");
    var textWrapper = document.querySelector('.text-wrapper');
    ml6.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    });   
  }

  
  // Wrap every letter in a span
  var ml3 = document.querySelector('.ml3');
  if(ml3) {
    ml3.innerHTML = ml3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    }); 
  }  

  // Wrap every letter in a span
  var ml2 = document.querySelector('.ml2');
  if(ml2) {  
    ml2.innerHTML = ml2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    });   
  }

  
})(jQuery);

jQuery(document).ready(function() {

  function globeIsScrolledIntoView(elem)
  {
      var docViewTop = jQuery(window).scrollTop();
      var docViewBottom = docViewTop + jQuery(window).height();

      var elemTop = jQuery(elem).offset().top;
      var elemBottom = elemTop + jQuery(elem).height();

      return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  }

  if(jQuery('.paragraph--type--section-hero-earth').length > 0) {
    jQuery(window).on('resize scroll', function() {
      var inView = false;
      if (globeIsScrolledIntoView('.paragraph--type--section-hero-earth')) {
       if (inView) { return; }
        inView = true;
        //console.log('bgearth in view');
        bgearth.autoRotate=true;

      } else {
        inView = false; 
        bgearth.autoRotate=false;
        //console.log('bgearth not in view');
      };
    });    
  }
  
});  

// Scroll Button
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 800,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.scroll-to-top-2');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

// circluar progressbar
window.onload = function() {
    const l = document.querySelector(".js-to-top"),
        a = document.querySelector(".scroll-to-top-arrow"),
        d = document.querySelector(".progress-bar"),
        c = d.getTotalLength();
    l.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }), t(a), d.style.strokeDasharray = c, d.style.strokeDashoffset = c, window.addEventListener("scroll", () => {
        r(d, c)
    }), window.addEventListener("resize", () => {
        t(a)
    })
};

function t(l) {
    //l.style.top = document.documentElement.clientHeight * .5 - l.getBoundingClientRect().height * .5 + "px"
}

function r(l, a) {
    const d = document.documentElement.clientHeight,
        c = document.documentElement.scrollHeight,
        h = document.documentElement.scrollTop / (c - d);
    l.style.strokeDashoffset = a - a * h
}

document.addEventListener("DOMContentLoaded", function () {
    
  new JParticles.Particle('#particle-container', {
    num: 0.05,
    maxR: 2.4,
    minR: 0.6,
    maxSpeed: 0.2,
    minSpeed: 0.03,
    proximity: 0.7,
    range: 0.9,
    color: '#222222', 
    lineShape: 'cube',
    range: 2000,
    proximity: 100,
    // Turn on parallax effect
    parallax: false,
  });  
  
  /*
    const particleContainer = document.getElementById("particle-container");

    const particles = new JParticles(particleContainer, {
        // Particle settings go here
        // Example:
        particle: {
            color: "#000000",
            size: 3,
            count: 100,
        },
    });

    particles.start(); */
});