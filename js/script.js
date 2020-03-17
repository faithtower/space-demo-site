$(document).ready(function() {

    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 100) {
        $('.navigation').addClass('change-navigation');
      } else {
        $('.navigation').removeClass('change-navigation');
      }
    });
  });

































