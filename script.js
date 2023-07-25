const readMoreButton = document.querySelector('.btn__read-more');
const readMoreButtonText = document.querySelector('.btn__read-more-text');

let swiper = 0;

function swiperInitialize() {
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

function swiperOff() {
    if (swiper) {
        swiper.destroy();
        swiper = 0;
    }
}

window.onload = function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        swiperInitialize();
    } else {
        swiperOff();
    }
};

window.addEventListener('resize', function () {
    if (window.innerWidth < 767) {
        swiperInitialize()
    } else {
        swiperOff()
    }
});

readMoreButton.addEventListener('click', function () {
    const hiddenCards = document.querySelectorAll('.hidden-item');
    switch (readMoreButtonText.textContent) {
        case 'Показать все':
            readMoreButtonText.textContent = 'Скрыть';
            for (let i = 0; i < hiddenCards.length; i++) {
                let element = hiddenCards[i];
                element.classList.remove('brand-list__item--hidden');
            }
            break;
        case 'Скрыть':
            readMoreButtonText.textContent = 'Показать все';
            for (let i = 0; i < hiddenCards.length; i++) {
                let element = hiddenCards[i];
                element.classList.add('brand-list__item--hidden');
            }
            break;
    }
});