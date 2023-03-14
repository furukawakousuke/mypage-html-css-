$(function(){
  $('topscrol,ha').on('click',function(event){
    $('body,html').animate({
      scrollTop:0
    },800);
    event.preventDefault();
  });
});

$(function(){
  $('.menuber').on('click',function(event){
    $(this).toggleClass('active');
    $('#container').fadeToggle();
    $event.preventDefault;
  });
});