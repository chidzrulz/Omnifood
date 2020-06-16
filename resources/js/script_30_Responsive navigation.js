$(document).ready(function() {
  
    /* For sticky navigation */
    $('.js--section-features').waypoint(function(direction) {  /* Function has an argument Direction to detect if user is scrolling down or up */
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px;'
});
   
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {  /* We select the class 'js--scroll-to-plans' and when we click on it, the belowfunction happens */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);  /*We have an animation which scrolls to the top of the section 'js--section-plans' with a speed of 1000ms. To make the animate scroll we have to select ('html,body') */
    });
    
     $('.js--scroll-to-start').click(function () {  /* We select the class 'js--scroll-to-plans' and when we click on it, the belowfunction happens */
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  /*We have an animation which scrolls to the top of the section 'js--section-plans' with a speed of 1000ms. To make the animate scroll we have to select ('html,body') */
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {  /* Select a link element where href attribute starts with '#' and when we click it it links to below code */
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {  /* not so important code */
          var target = $(this.hash);  /* not so important code */
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');  /* not so important code */
          if (target.length) {  /* If the element exists, then we scroll to it as mentioned below */
            $('html,body').animate({scrollTop: target.offset().top }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /*  Animations on Scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');  /* Add the class 'js--wp-1' and give function 'animated' and animation type 'fadeIn' */
    }, {
        offset: '50%' /* 50% will be half of the page */
    });
      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');  
    }, {
        offset: '50%' 
    });
      $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');  
    }, {
        offset: '50%' 
    });
      $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');  
    }, {
        offset: '50%' 
    });
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');  /* This variable is the result of selecting the navigation */ 
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);  /* It is used to open and close a box */
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            
        }
    });

});

