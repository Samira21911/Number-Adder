function addTwoNum(num1, num2) {
  return num1 + num2;
}

const numberOne = document.querySelector("#num1");
const numberTwo = document.querySelector("#num2");

const button = document.querySelector("button");

const outputElement = document.querySelector("output");

button.addEventListener("click", function () {
  outputElement.innerHTML = parseInt(num1.value) + parseInt(num2.value);
});
