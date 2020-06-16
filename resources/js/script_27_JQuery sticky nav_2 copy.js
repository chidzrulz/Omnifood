$(document).ready(function() {
  
    $('.js--section-features').waypoint(function(direction) {  /* Function has an argument Direction to detect if user is scrolling down or up */
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px;'
});
   
    
    
    /* var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
}) */


});