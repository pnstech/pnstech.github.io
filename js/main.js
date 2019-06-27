
        //menu toggle **i dont know mhwta this shit is
        $(document).ready(function(){
        $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
        })
        })
    

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
 