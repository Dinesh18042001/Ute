
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



$('.ladder-racks-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,           
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    navText : [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
    ],
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



    document.addEventListener('DOMContentLoaded', function() {
        var galleryImages = document.querySelectorAll('.gallery-img');
        var lightboxImage = document.getElementById('lightboxImage');

        galleryImages.forEach(function(image) {
            image.addEventListener('click', function() {
                var imgSrc = this.getAttribute('data-img-src');
                lightboxImage.src = imgSrc;
            });
        });
    });





    $(document).ready(function() {

        $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
        });
        });
        
        });

