import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "/src/sass/style.scss";

try {
    new Swiper(".schedule__swiper", {
        modules: [Pagination, Navigation],
        loop: true, // Зациклить слайдер
        slidesPerView: 4,
        spaceBetween: 40,
        speed: 1000,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: ".schedule__nav-btn--next",
            prevEl: ".schedule__nav-btn--prev",
        }

    });
}
catch (e) { }

