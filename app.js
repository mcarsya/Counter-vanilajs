const countValue = document.getElementById("value");
const countDecrease = document.getElementById("decrease");
const countIncrease = document.getElementById("increase");
const countReset = document.getElementById("reset");    
let count = 0;

countValue.textContent = count;
countIncrease.addEventListener("click", () => {
    count++;
    countValue.textContent = count;

});

countDecrease.addEventListener("click", () => {
   count--;
   countValue.textContent = count;

});