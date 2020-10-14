'use strict';

const fontSize = document.querySelectorAll('.font-size'), // шрифт  font-size_small ** font-size_big ++ font-size_active
      tabs = document.querySelector('#book'), //контент book_fs-big ** book_fs-small
      tabsParent = document.querySelector('.book__control'); // обработчик события


tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    e.preventDefault();

    fontSize.forEach(item => {
        item.classList.remove('font-size_active');
    });

    tabs.classList.remove('book_fs-small', 'book_fs-big');
    
    if (target == fontSize[0]) {
        tabs.classList.add('book_fs-small');
        fontSize[0].classList.add('font-size_active');
    }
    if (target == fontSize[1]) {
        fontSize[1].classList.add('font-size_active');
    }
    if (target == fontSize[2]) {
        tabs.classList.add('book_fs-big');
        fontSize[2].classList.add('font-size_active');
    }
});