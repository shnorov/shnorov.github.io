$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 2,
    margin: 32,
    stagePadding: 30,
    nav: true,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      }
    }
  });
  $('.c_s_blocks .owl-prev span').html('<i class="fas fa-chevron-left"></i>');
  $('.c_s_blocks .owl-next span').html('<i class="fas fa-chevron-right"></i>');
  $('.c_s_blocks .owl-dots button').html('');
  $('.menu_btn').click(function(){
    $('.main_menu').css('right','0');
  });
  $('.menu_btn_close').click(function(){
    $('.main_menu').css('right','-500px');
  });
});