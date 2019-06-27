var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("f").style.top = "0";
}
 else {
  document.getElementById("f").style.top = "-100px";
}
prevScrollpos = currentScrollPos;
}


$(window).on('scroll',function(){
        
      if($(window).scrollTop())
    {
    $('header').addClass('black');
    }
    else 
    {
    $('header').removeClass('black');
    }
    });