var swiper = new swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop: true,
    pagination{
        el: ".swiper-pagination",
        clickable: true,
    }
    navigation:{
        nexEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
}

)