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


});