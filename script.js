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