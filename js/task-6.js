const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = inputEl.value;
  if (isNaN(amount) || (amount < 1 && amount > 100)) {
    boxesEl.innerHTML = "";
  }

  let box = "";
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    box += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }
  boxesEl.innerHTML = box;

  inputEl.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
