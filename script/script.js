$(document).ready(function() {
  //Fixed Header Script
  $(window).scroll(function(event) {
    var height = $('.sh-body-container').offset().top;
    if($(window).scrollTop() > height){
      $('.sh-nav').removeClass('container');
      $('.sh-nav').addClass('container-fluid');
      $('.sh-nav').addClass('navbar-fixed-top');
      $('.sh-small-header').addClass('navbar-fixed-top');
    }
    else {
      $('.sh-nav').addClass('container');
      $('.sh-nav').removeClass('container-fluid');
      $('.sh-nav').removeClass('navbar-fixed-top');
      $('.sh-small-header').removeClass('navbar-fixed-top');
    }
  });
  //end of Fixed Header Script

  //Slider Script
  /*var currentSlide = 1;
  setInterval(function(){slideNext();},3000);

  function slideNext(){

  }*/
  $('body').click(function(event) {
    /* Act on the event */
    var width = $('[data-slide-id="1"]').css('width');
    $('[data-slide-id="3"]').animate({left:"-"+width},300,"swing");
  });
  //end of Slider Script

});
