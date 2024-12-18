// const modalToggle = () => {
//     document.querySelector('.modal-container').classList.toggle('hidden');
// }
// document.addEventListener("DOMContentLoaded", function () {
//     // Inputmask({
//     //     mask: "+7 (999) 999-99-99"
//     // }).mask(document.getElementById("phone"));
// });


// function showMessage(message) {
//     console.log(message);
// }
//
// function changeBackgroundColor(color) {
//     document.body.style.backgroundColor = color;
// }
//
// function toggleVisibility(selector) {
//     const element = document.querySelector(selector);
//     if (element) {
//         element.style.display = (element.style.display === 'none') ? 'block' : 'none';
//     }
// }
//
// function getUtmTermAndChangeH1() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const utmTerm = urlParams.get('utm_term');
//     if (utmTerm) {
//         const h1Element = document.querySelector('h1');
//         if (h1Element) {
//             h1Element.textContent = utmTerm;
//         }
//     }
// }
//
// function logCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     console.log(`${hours}:${minutes}:${seconds}`);
// }
//
// function resetBackgroundColor() {
//     document.body.style.backgroundColor = 'white';
// }
//
// showMessage("Скрипт загружен!");
// logCurrentTime();
//
//
// document.addEventListener('DOMContentLoaded', () => {
//     getUtmTermAndChangeH1();
//     resetBackgroundColor();
//     changeBackgroundColor('lightblue');
//     toggleVisibility('.content');
// });


const cards = [
    {
        image: "assets/images/portfolio.png",
        text: "Сайт-визитка"
    },
    {
        image: "assets/images/portfolio.png",
        text: "Сайт-визитка"
    },
    {
        image: "assets/images/portfolio.png",
        text: "Сайт-визитка"
    },
    {
        image: "assets/images/portfolio.png",
        text: "Сайт-визитка"
    },
    {
        image: "assets/images/portfolio.png",
        text: "Сайт-визитка"
    },
    {
        image: "assets/images/portfolio.png",
        text: "Сайт-визитка"
    }
];

// Функция создания карточки
function createCard(cardData) {
    return `
        <div class="card h-100">
            <img src="${cardData.image}" class="card-img-top" alt="portfolio">
            <div class="card-body text-center">
                <p class="card-text">${cardData.text}</p>
                <button type="button" data-bs-toggle="modal" data-bs-target="#Modal" class="btn btn-primary">Заказать</button>
            </div>
        </div>
    `;
}

// Функция обновления карусели
function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';

    const isMobile = window.innerWidth < 768;
    const itemsPerSlide = isMobile ? 1 : 3;

    for (let i = 0; i < cards.length; i += itemsPerSlide) {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${i === 0 ? 'active' : ''}`;

        if (isMobile) {
            // Для мобильных устройств - одна карточка на слайд
            carouselItem.innerHTML = createCard(cards[i]);
        } else {
            // Для десктопа - три карточки на слайд
            const row = document.createElement('div');
            row.className = 'row row-cols-3 g-4';

            for (let j = i; j < i + itemsPerSlide && j < cards.length; j++) {
                const col = document.createElement('div');
                col.className = 'col';
                col.innerHTML = createCard(cards[j]);
                row.appendChild(col);
            }

            carouselItem.appendChild(row);
        }

        carouselInner.appendChild(carouselItem);
    }
}

// Обновляем карусель при загрузке и изменении размера окна
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);

// Добавляем небольшую задержку при ресайзе, чтобы уменьшить количество вызовов
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 250);
});