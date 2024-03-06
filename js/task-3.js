const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", handleInput);

function handleInput() {
  let name = inputEl.value.trim();
  outputEl.textContent = name || "Anonymous";
}
