$(document).ready(function() {
  $(window).scroll(function() {
    $('.hideme').each(function(i) {
      var top_of_object = $(this).offset().top 
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window  > top_of_object + 100 ) {
        $(this).animate({
          'opacity': '1'
        }, 500);
      }
    });
  });
});

