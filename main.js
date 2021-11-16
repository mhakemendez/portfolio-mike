
$(document).ready(function(){

   

    //=================== SCROLL FUNCTION ======================// 

    $(window).scroll(function(){

    $('.navbar').toggleClass('scrolled', $(this).scrollTop()>50);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop()>50);
    $('.navbar-brand').toggleClass('scrolled', $(this).scrollTop()>50);

    });

    //=================== SCROLL FUNCTION ======================// 

    //=================== AOS FUNCTION ======================// 

    AOS.init();

    //=================== AOS FUNCTION ======================// 


});


