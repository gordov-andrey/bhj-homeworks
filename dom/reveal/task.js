'use strict';

const reveal = document.querySelectorAll('.reveal');

[...reveal].map(item => {
    document.addEventListener('scroll', e => {
        const pageHeight = window.innerHeight;
        const top = item.getBoundingClientRect().top - pageHeight;
        const bottom = item.getBoundingClientRect().bottom - pageHeight;
        -pageHeight < bottom && top < 0 ? item.classList.add('reveal_active') : item.classList.remove('reveal_active');
    });
});