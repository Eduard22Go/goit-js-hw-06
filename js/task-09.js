// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const buttonRef = document.querySelector('.change-color');
// const spanRef = document.querySelector('.color')

// buttonRef.addEventListener('click', buttonClickHandler);

// function buttonClickHandler() {
//   const body = document.querySelector('body');
//   body.style.backgroundColor = getRandomHexColor();
//   spanRef.textContent = getRandomHexColor();
// }

// ---
const refs = {
  chengeColor: document.querySelector(".change-color"),
  selectedColor: document.querySelector(".color"),
};

refs.chengeColor.addEventListener("click", onColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.selectedColor.textContent = color;
}