const readMoreButton = document.querySelector('.btn__read-more');
const readMoreButtonText = document.querySelector('.btn__read-more-text');

let swiper = 0;

function swiperInitialize() {
    swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

function swiperOff() {
    if (swiper) {
        swiper.destroy();
        swiper.disable();
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
    const brandBlock = document.querySelector('.brand-list');
    const readMoreIcon = document.querySelector('.btn__read-more-icon')

    switch (readMoreButtonText.textContent) {
        case 'Показать все':
            readMoreButtonText.textContent = 'Скрыть';
            brandBlock.classList.add('brand-list--extended');
            readMoreIcon.style.transform = 'rotate(180deg)';
            break;
        case 'Скрыть':
            readMoreButtonText.textContent = 'Показать все';
            brandBlock.classList.remove('brand-list--extended');
            readMoreIcon.style.transform = 'rotate(0deg)';
            break;
    }
});