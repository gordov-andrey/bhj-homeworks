const sliderId = Array.from(document.querySelectorAll('.slider__item'));
const arrow = document.querySelectorAll('.slider__arrow');
let current = 0;

const showSlides = function(){
  if (this.classList.contains('slider__arrow_next')) {
    current++;
	for (let item of sliderId) {
		item.className = 'slider__item';
	}
	if (current >= sliderId.length) {
		current = 0;
	}
	sliderId[current].classList.toggle('slider__item_active');
  } else {
    current--;
	for (let item of sliderId) {
		item.className = 'slider__item';
	}
	if (current < 0) {
		current = sliderId.length - 1;
	}
	sliderId[current].classList.toggle('slider__item_active');
  }
}

for( let i = 0; i < arrow.length; i++) {
  arrow[i].onclick = showSlides;
}