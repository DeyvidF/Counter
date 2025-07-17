let number = document.getElementById("number")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let increase = document.getElementById("increase")

let count = 0;

function updateDisplay() {
    number.textContent = count;
    if (count < 0) {
        number.style.color = "red";
    } else {
        number.style.color = ""; 
    }
}

decrease.addEventListener("click", function() {
    count--;
    updateDisplay();
});

increase.addEventListener("click", function() {
    count++;
    updateDisplay();
});

reset.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});

updateDisplay();


