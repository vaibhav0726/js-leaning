let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let ans = document.getElementById("sum-el");

function add() {
  ans.textContent += num1 + num2;
  console.log(ans);
}

function subtract() {
  ans.textContent += num1 - num2;
  console.log(ans);
}

function multiply() {
  ans.textContent += num1 * num2;
  console.log(ans);
}

function divide() {
  ans.textContent += num1 / num2;
  console.log(ans);
}
