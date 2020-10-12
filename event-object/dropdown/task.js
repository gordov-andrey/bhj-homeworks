'use strict';

const list = document.querySelectorAll('.dropdown');

[...list].map(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    item.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
    item.querySelector('.dropdown__value').textContent = e.target.textContent;
}));

