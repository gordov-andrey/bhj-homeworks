'use strict';

const rotator = document.querySelectorAll('.rotator__case');
let i = 0;    

function changeSlide() {
    rotator[i].classList.remove('rotator__case_active');

    if (i == rotator.length - 1){
        i = 0;
    } else {
        i++;
    }  

    rotator[i].classList.add('rotator__case_active');
}

setInterval(changeSlide, 1000);