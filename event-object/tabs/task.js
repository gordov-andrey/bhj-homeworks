'use strict';

const tab = document.querySelectorAll('.tab'),
      tabContent = document.querySelectorAll('.tab__content'),
      tabsParent = document.querySelector('.tabs');

function hideTabContent() {
    tab.forEach(item => {
        item.classList.remove('tab_active');
    });
    tabContent.forEach(item => {
        item.classList.remove('tab__content_active');
    });
}

function showTabContent(i = 0) {
    tab[i].classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tab')) {
        tab.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    } 
});