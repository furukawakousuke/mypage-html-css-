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

const targets = document.getElementsByClassName('post');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
   } else{
    entries[j].target.classList.remove('active');
   }
  }
 });
 observer.observe(targets[i]);
}
