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

/* Arduino.cc Button */

$(document).on('mouseenter', '.arduino-button', function() {
  $('.arduino-button-front').css('top', '49px');
  $('.arduino-button').css('cursor', 'pointer');
});

$(document).on('mouseleave', '.arduino-button', function() {
  $('.arduino-button-front').css('top', '48px');
});

$(document).on('mousedown', '.arduino-button', function() {
  $('.arduino-button-front').css('top', '52px');
});
/*---------------------------*/
