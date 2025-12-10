const counterDisplay = document.getElementById("number")
const incrementElement = document.getElementById("increment")
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const resetBtn = document.getElementById("reset")

let currentCount = 0;

subtractBtn.addEventListener("click", function() {
    const incrementValue = parseInt(incrementElement.value);
        currentCount -= incrementValue;
        counterDisplay.innerText = currentCount;
})

addBtn.addEventListener("click", function() {
    const incrementValue = parseInt(incrementElement.value);
    currentCount += incrementValue;
    counterDisplay.innerText = currentCount;
})

resetBtn.addEventListener("click", function() {
    currentCount = 0;
    counterDisplay.innerText = currentCount;
})

