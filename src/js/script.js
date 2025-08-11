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
        breakpoints: {
            1600: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            1400: {
                slidesPerView: 3.5,
                spaceBetween: 28
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 16
            }
        },

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


try {
    const tabs = [...document.querySelectorAll('.schedule__tab[role="tab"]')];
    const panels = [...document.querySelectorAll('.schedule__content-item[role="tabpanel"]')];

    // хелпер: активируем таб и связанную панель
    function activate(tab) {
        const panelId = tab.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        // Табы
        tabs.forEach(t => {
            const isActive = t === tab;
            t.classList.toggle('schedule__tab--active', isActive);
            t.setAttribute('aria-selected', String(isActive));
            t.setAttribute('tabindex', isActive ? '0' : '-1');
        });

        // Панели
        panels.forEach(p => p.hidden = p !== panel);

        // Если внутри панели Swiper — обновим размеры (по желанию)
        panel._swiper?.update?.();
    }

    // Инициализация: найти таб с aria-selected="true"
    const initial = tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0];
    // Сначала спрячем все панели атрибутом hidden
    panels.forEach(p => p.hidden = true);
    activate(initial);

    // Клики
    tabs.forEach(t => t.addEventListener('click', () => activate(t)));


} catch (e) {
    console.error('[schedule tabs]', e);
}



// try {
//     const tabs = document.querySelectorAll(".schedule__tab");
//     const contents = document.querySelectorAll(".schedule__content-item");

//     tabs.forEach((tab, index) => {
//         tab.addEventListener("click", () => {
//             tabs.forEach((t) => t.classList.remove("schedule__tab--active"));
//             tab.classList.add("schedule__tab--active");

//             contents.forEach((c) => (c.style.display = "none"));
//             contents[index].style.display = "block";
//         });
//     });

//     contents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
// }
// catch (e) { }



