let windowWidth = window.innerWidth;
window.addEventListener("resize", () => {
  windowWidth =  window.innerWidth;
});

const sliderItems = document.querySelectorAll('.feedback__block');
const feedbackPopup = document.querySelector('.feedback__popup');
const popupContent = document.querySelector('.popup__content');
const shadow = document.querySelector('.shadow');

function initModal() {
  for (const review of sliderItems) {
    let item = review.cloneNode(true);
    review.addEventListener('click', function (event) {
      if (windowWidth < 991) {
        review.style.display = '';
        feedbackPopup.classList.toggle('open-block');
        popupContent.innerHTML = '';
        popupContent.append(item); 
        shadow.classList.toggle('shadow_active');
      };
    });
  };

  if (feedbackPopup) {
    if (windowWidth < 991) {
      feedbackPopup.addEventListener('click', function () {
        feedbackPopup.classList.remove('open-block');
        shadow.classList.remove('shadow_active');
      });
    };
  };
};

initModal();