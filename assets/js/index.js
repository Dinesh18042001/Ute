
let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};



$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
    ],
    autoplay: true,           
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})