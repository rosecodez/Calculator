// Access elements with DOM
//numbers
const C = document.querySelector(".C");
const nine = document.getElementById("9");
const eight = document.getElementById("8");
const seven = document.getElementById("7");
const six = document.getElementById("6");
const five = document.getElementById("5");
const four = document.getElementById("4");
const three = document.getElementById("3");
const two = document.getElementById("2");
const one = document.getElementById("1");
const zero = document.getElementById("0");
const dot = document.getElementById("dot");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
let input = document.getElementById("input");

// Function for displaying input
function displayValue() {
    numbers.addEventListener('click', ({ target }) => {
        if (!target.hasAttribute('id')) {
        return;
        }
        input.textContent += target.id;
    });
    operators.addEventListener('click', ({ target }) => {
        if (!target.hasAttribute('id')) {
        return;
        }
        input.textContent += target.id;
    });

}
displayValue();

// Function to reset input
function resetInput() {
    input.textContent = " ";
}
C.addEventListener('click', resetInput);

// Functions for basic math operators

// add
function add(a, b) {
    return a + b;
}
// substract 
function subtract (a, b) {
    return a - b;
}
// multiply 
function multiply (a, b) {
    return a * b;
}
//divide 
function divide (a, b) {
    return a / b;
}


// Declare variables for operation
let firstNumber = " ";
let operator = " ";
let secondNumber = " ";

// Create function to operate
function operate (firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
        return add(a, b);

        case "-":
        return subtract (a, b);

        case "*":
        return multiply (a, b);

        case "/":
        return divide (a, b);
    }
}