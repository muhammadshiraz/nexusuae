$(document).ready(function() {

    // Preloader Function
    setTimeout(function () {          
        $('.preloader').hide();
    }, 2000);

    // Show Mail Archiver Function:
    $('#main__wrapper').hide();
    setTimeout(function () {          
        $('#main__wrapper').slideDown("slow");
    }, 2000);

    // Navbar active class
    $(".navbar-nav li").click(function(){
        $(".navbar-nav li").removeClass("active");
        $(this).addClass('active');
      });

      // Scroll arrow
    $(".scroll__arrow a").click(function() { 
        $("html, body").animate({ 
            scrollTop: $( 
              'html, body').get(0).scrollHeight 
        }, 2000); 
    }); 
    // Add sticky class
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".nav_bar").addClass("sticky");
    } else {
        $(".nav_bar").removeClass("sticky");
    }
});// DOM function end