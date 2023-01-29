const menuBtn = document.querySelector('#hamb');
const popup = document.querySelector('.popup');
const shadow = document.querySelector('.shadow');

menuBtn.addEventListener('click', clickOnBtn);

function clickOnBtn (e) {
  e.preventDefault();
  popup.classList.toggle('open');
  menuBtn.classList.toggle('active');
  shadow.classList.toggle('shadow_active');
}