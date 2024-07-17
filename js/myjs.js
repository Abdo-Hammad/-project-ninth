// global $, alert,console
$(function(){
' use Strict;'
// Start nicescroll 
 $("body").niceScroll({
  cursorcolor:"#f7600e",
  cursorwidth:"16px",
  cursorborder: '1px solid #f7600e'
}); 
 // Staretn header

  $(".header").height($(window).height());
    
 // Staretn arow
  $(".arow i").click(function(){
  	$('html, body').animate({
     scrollTop: $('.Features').offset().top
  	},2000);
   
  });

 $('.hir').click(function(){
    $('html, body').animate({
     scrollTop: $('.our-work').offset().top
  	},2000);
 });
 $('.hir2').click(function(){
    $('html, body').animate({
     scrollTop: $('.Contact-Form').offset().top
  	},2000);
 });
// Start Subscribe
   // Start ourwork
   $(".Show-More").click( function(){
   	  $('.dsds').fadeToggle(3000);

   });


// Start Testimonials
var leftArrow = $('.Testimonials .fa-chevron-left'),
    rightArrow = $('.Testimonials .fa-chevron-right')

  function checkClients(){
  	if ($('.monials:first').hasClass('active')){
       leftArrow.fadeOut();
  	}else{
  		leftArrow.fadeIn();
  	}

   if ($('.monials:last').hasClass('active')){
       rightArrow.fadeOut();
  	}else{
  		rightArrow.fadeIn();
  	}

   
  }

checkClients();

$('.Testimonials i').click(function(){
   if($(this).hasClass('fa-chevron-right')){
   	  $('.Testimonials .active').fadeOut(100, function(){
         $(this).removeClass('active').next('.monials').addClass('active').fadeIn();
         checkClients();
   	  });
   }else{
      $('.Testimonials .active').fadeOut(100, function(){
         $(this).removeClass('active').prev('.monials').addClass('active').fadeIn();
         checkClients();
   	  });
   }
});

});
 