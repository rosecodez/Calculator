// Access elements with DOM
const C = document.querySelector("#C");
const nine = document.querySelector("#9");
const eight = document.querySelector("#8");
const seven = document.querySelector("#7");
const six = document.querySelector("#6");
const five = document.querySelector("#5");
const four = document.querySelector("#4");
const three = document.querySelector("#3");
const two = document.querySelector("#2");
const one = document.querySelector("#1");
const zero = document.querySelector("#0");
const hash = document.querySelector("#.");

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
function displayValue() {

}
console.log(add(2, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));
console.log(divide(2, 2));

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