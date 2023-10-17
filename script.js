// getting the html element
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");
const resetBtn = document.getElementById("resetBtn");

// decrement button click
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    // console.log(value);
    if(value > 0) {
        displayValue.innerText = value - 1;
    }else{
        alert("Negative value not allowed")
    }
});

// increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value >= 10) {
        alert("10+ values are not allowed");
    }else {
        displayValue.innerText = value + 1;
    }
});

// reset button click
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});