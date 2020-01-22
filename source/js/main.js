let popuElement = document.querySelector('.modal');
let popupOpenButton = document.querySelector('.contacts__back-call');
let popupCloseButton = document.querySelector('.feedback__button-close');

popupOpenButton.addEventListener('click', function () {
  popuElement.classList.add('modal--show');
})

popupCloseButton.addEventListener('click', function () {
  popuElement.classList.remove('modal--show');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popuElement.classList.contains('modal--show')) {
      popuElement.classList.remove('modal--show');
    }
  }
})
