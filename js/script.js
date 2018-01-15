/* Arc.io Button */

$(document).on('mouseenter', '.ark-button', function(){
  $('.ark-button-back').css({
    "bottom" : "8px",
    "left" : "8px"
  });
  $('.ark-button').css('cursor', 'pointer');
});

$(document).on('mouseleave', '.ark-button', function() {
  $(".ark-button-back").css({
    "bottom" : "10px",
    "left" : "10px"
  });
});
/*---------------------------*/
