// Access elements with DOM
//numbers
document.getElementById("C");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
let result = document.getElementById("result");

// Declare variables for numbers and operator
let firstNumber = 0;
let operator = "";
let secondNumber = 0;

// Transform strings into numbers
function transformStrings() {
    Number("9");
    Number("8");
    Number("7");
    Number("6");
    Number("5");
    Number("4");
    Number("3");
    Number("2");
    Number("1");
    Number("0");
    Number(".");
}

// Function for displaying input
function displayNumbers() {
    numbers.addEventListener('click', ({ target })  => {
        if (!target.hasAttribute('value')) {
        return;
        }
        input.textContent += target.value;

    });
}
displayNumbers();

// Function for displaying operator
function displayOperator() {
    operators.addEventListener('click', ({ target }) => { 
        if (!target.hasAttribute('value')) {
        return;
        }
        input.textContent += target.value;
        operator = target.value;
    });
}
displayOperator();

// event listener for when equal is pressed to show up the result
equal.addEventListener("click", function() {
    result.innerText = operate();
})


// Function to reset the calculator
function resetInput() {
    input.textContent = " ";
    result.textContent = " ";
}
C.addEventListener('click', resetInput);

// Functions for basic math operators

// add
function add() {
    return firstNumber + secondNumber;
}
// subtract 
function subtract () {
    return firstNumber - secondNumber;
}
// multiply 
function multiply () {
    return firstNumber * secondNumber;
}
//divide 
function divide () {
    return firstNumber / secondNumber;
}


// Create function to operate
function operate () {
    switch (operator) {
        case "add":
        return add();

        case "subtract":
        return subtract ();

        case "multiply":
        return multiply ();

        case "divide":
        return divide ();
    }
}