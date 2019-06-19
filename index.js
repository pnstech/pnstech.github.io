/*---> Logo Slider <---*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	 autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
			dots:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
});



/*--->XXXXXXXXXXXXXXXXX<---*/

//display feedback box
function  fun1()
      {
      document.querySelector(".popup").style.display="flex";    
      }
 //hide feedbackbox onclick cut     
      function fun2(){
      document.querySelector(".popup").style.display="none";    
      }


/*---> Screen Preloader <---*/

var loaderx=document.getElementById('loader');
function loadme()
{
 loaderx.style.display='none';
  setTimeout(function(){ 
   show_log();
   }, 5000);
}

/*---> Alert Box <---*/

    function funalert()
    {
        document.querySelector(".popup").style.display="none";    
      swal({
    title: "Thank You For Your Feedback!",
    text: "",
    icon: "success",
  });
    }

/*---> Back To Top Button <---*/


const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll',scrollFunction);
function scrollFunction()
{
  if(window.pageYOffset>300)
  {
    if(!backToTop.classList.contains('btnEntrance'))
    {
      backToTop.classList.remove('btnExit');
      backToTop.classList.add('btnEntrance');
      backToTop.style.display='block';
    }
  }
  else
  {
    if(backToTop.classList.contains('btnEntrance'))
    {
      backToTop.classList.remove('btnEntrance');
      backToTop.classList.add('btnExit');
      setTimeout(function(){
        backToTop.style.display='none';
      },250);
    }
  }
}
backToTop.addEventListener('click',backTop);
function backTop()
{
window.scrollTo(0,0);
}


/*---> Login Signup Popups <---*/

function cancel()
{
 document.getElementById('sign').style.display='none';
}
function show_log()
   {
    document.getElementById('log').style.display="block";
   }
function cancel_log()
{
 document.getElementById('log').style.display='none';
}
function show_signup()
{
  document.getElementById('sign').style.display='block';
}


/*---> Navbar Animation <---*/


//scroll demo of nav bar
//Demo-1
/*var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#f').followTo(560);
*/
//Demo-2 */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  document.getElementById('searchx').style.display='none';
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("f").style.top = "0";
  } else {
    document.getElementById("f").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


/*---> Hide-show Serch Box <---*/

  var action=1;
function search()
{
  if(action==1)
 {
  document.getElementById('searchx').style.display='block';
  action=2;
 }
 else
 {
  document.getElementById('searchx').style.display='none';
  action=1;
 }
}

/*----> Auto Text Typer <----*/

$(document).ready(function(){
$('.menu-toggle').click(function(){
$('nav').toggleClass('active')
})
})
//dynamic text
var typed = new Typed('.text', {
  strings: ["NITIAN","ENGINEER"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true
});
//sticky navigation bar
$(window).on('scroll',function(){
if($(window).scrollTop())
{
$('header').addClass('black');
}
else
{
$('header').removeClass('black');
}
})
//sliding images
var myIndex = 0;
carousel();
function carousel() {
    var x = document.getElementsByClassName("mySlides");
    var i;
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); 
}
