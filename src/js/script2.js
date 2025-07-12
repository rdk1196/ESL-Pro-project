import "/src/sass/style.scss";

import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'; // Если используете пагинацию (точки)
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.promo__swiper', { // Используем ваш класс .promo__swiper
        modules: [Pagination, Autoplay, EffectFade], // Подключаем модули
        loop: true, // Зациклить слайдер
        slidesPerView: 1, // Показать 1 слайд за раз
        spaceBetween: 0, // Без отступов между слайдами
        effect: 'fade', // Эффект перехода (по желанию, 'slide' по умолчанию)
        fadeEffect: {
            crossFade: true, // Плавное затухание между слайдами
        },
        speed: 1000, // Скорость анимации (1 секунда)
        autoplay: {
            delay: 5000, // Автоматическая прокрутка каждые 5 секунд
            disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии пользователя
        },

        // Пагинация (точки внизу)
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Делает точки кликабельными
            renderBullet: function (index, className) {
                // Кастомный рендеринг точек, чтобы Swiper использовал наши классы,
                // но здесь он в основном просто передает свой стандартный класс + наш
                return '<span class="' + className + '"></span>';
            },
        },

        // Если нужны навигационные кнопки (стрелки, не видно на макете)
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
    });
});