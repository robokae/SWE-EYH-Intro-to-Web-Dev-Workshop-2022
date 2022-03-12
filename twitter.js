const toggle = document.querySelector('#theme_toggler');
toggle.addEventListener('click', modeSwitch);

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  var rootElement = document.body;
  rootElement.classList.toggle('lightMode');
}
