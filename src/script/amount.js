const valueInputs = document.querySelectorAll('.radio__input');
const payInput = document.querySelector('.reward__input');

if (payInput) {
  payInput.addEventListener('input', (event) => {
    payInput.value = payInput.value.slice(0,4)

    valueInputs.forEach(item => {
      item.parentElement.classList.remove('radio_active');

      if (+item.value === +event.target.value) {
        item.parentElement.classList.add('radio_active');
      };

    });
  });
};

function setActiveInput() {
  const valueInputs = document.querySelectorAll('.radio__input');
  const valueByDefault = 100;

  valueInputs.forEach(item => {
    if (+item.value === valueByDefault) {
      item.parentElement.classList.add('radio_active');
    }
  })
}

function clearActiveClasses() {
  valueInputs.forEach(item => {
    item.parentElement.classList.remove('radio_active');
  })
}

for (let item of valueInputs) {
  item.addEventListener('click', function (event) {
    clearActiveClasses();
    payInput.value = item.value;
    event.target.parentElement.classList.add('radio_active');
  })
}

window.addEventListener('load', () => {
  setActiveInput();
})