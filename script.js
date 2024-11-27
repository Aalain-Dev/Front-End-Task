// caraousel js

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Menu Js
var Menu_Bar = document.querySelector('#menu-bar');

var Menu_Close = document.querySelector('.responsive-menu');
var Cross_Icon = document.querySelector("#menu-close");

Menu_Bar.addEventListener('click',function(){
    Menu_Close.style.display = "block";
})
Cross_Icon.addEventListener('click',function(){
    Menu_Close.style.display = "none";
})