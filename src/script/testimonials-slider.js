const sliderItems = document.querySelectorAll('.feedback__block');
const scroller = document.querySelector('.scroll__thumb');

function setMaxSlide() {
  if (scroller) {
    scroller.setAttribute('max', sliderItems.length - 4);
  }
}

function moveSlides() {
  const sliderWrap = document.querySelector('.feedback__carousel');
  const sliderWidth = sliderWrap.offsetWidth;
  
  sliderWrap.style.transform = `translateX(-${
    (sliderWidth / sliderItems.length) * scroller.value
  }px)`;
}

scroller.addEventListener("input", moveSlides);
setMaxSlide();
