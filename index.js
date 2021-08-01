
    $(".navbar-nav li a").on('click', function () {
        $("#check").trigger( "click" );
    });
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
     //Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
          var nav = $(this.hash);
          if (nav.length) {
               var contentNav = nav.offset().top-96;
                }
          if ( contentNav <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
       
    // Animations
    AOS.init({
        easing: 'ease-out-back',
        duration: 1500
    });