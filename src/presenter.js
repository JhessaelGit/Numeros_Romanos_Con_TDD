import ConvertirARomanos from "./NumerosARomanos.js";

const first = document.querySelector("#numero");
const form = document.querySelector("#Romano-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + ConvertirARomanos(firstNumber)+ "</p>";
});
