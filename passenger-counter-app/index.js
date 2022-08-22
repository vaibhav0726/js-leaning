let count = 0;

function increment() {
  count++;
  // pass in argument -> count
  document.getElementById("count").innerText = count;
}

let saveEl = document.getElementById("save-el")

function save(){
  saveEl.textContent += " "+count + " - ";
  count = 0;
  document.getElementById("count").innerText = count;
}
