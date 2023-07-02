function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = getRandomHexColor()

const refs = {
  body: document.body,
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.btn.addEventListener('click', (event) => {
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
})



















