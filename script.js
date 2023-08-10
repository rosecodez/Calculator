// Access elements with DOM
//numbers
document.getElementById("C");
const nine = document.getElementById("nine").value;
const eight = document.getElementById("eight").value;
const seven = document.getElementById("seven").value;
const six = document.getElementById("six").value;
const five = document.getElementById("five").value;
const four = document.getElementById("four").value;
const three = document.getElementById("three").value;
const two = document.getElementById("two").value;
const one = document.getElementById("one").value;
const zero = document.getElementById("zero").value;
const dot = document.getElementById("dot");
const numbers = document.getElementById("numbers");
const operators = document.querySelector("#operators");
let input = document.getElementById("input");
const equal = document.getElementById("equal");

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
// Declare variables for operation
let firstNumber = " ";
let operator = " ";
let secondNumber = " ";

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

function displayOperator() {
    operators.addEventListener('click', ({ target }) => { 
        if (!target.hasAttribute('value')) {
        return;
        }
        input.textContent += target.value;
    });
}
displayOperator();

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