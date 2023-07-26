const readMoreButton = document.querySelector('.btn__read-more');
const readMoreButtonText = document.querySelector('.btn__read-more-text');

let swiper = 0;
let resizeTimeout = 0;

function swiperInitialize() {
    if (!swiper) {
        console.log('Swiper init');
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}

function swiperOff() {
    console.log('swiper off');
    if (swiper) {
        swiper.destroy();
        swiper = 0;
    }
}

function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
        if (window.innerWidth < 767) {
            swiperInitialize();
        } else {
            swiperOff();
        }
    }, 500); // Задержка времени перед инициализацией Swiper
}

window.addEventListener('resize', handleResize);

// Вызываем функцию инициализации Swiper при загрузке страницы
handleResize();

readMoreButton.addEventListener('click', function () {
    const brandBlock = document.querySelector('.brand-block');
    switch (readMoreButtonText.textContent) {
        case 'Показать все':
            readMoreButtonText.textContent = 'Скрыть';
            brandBlock.classList.add('brand-block--extended');
            break;
        case 'Скрыть':
            readMoreButtonText.textContent = 'Показать все';
            brandBlock.classList.remove('brand-block--extended');
            break;
    }
});