// Access elements with DOM
const C = document.getElementById("C");
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");
const hash = document.getElementById("hash");
const dot = document.getElementById("dot");

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


C.addEventListener("click", function() {
    input.textContent = " ";
});
nine.addEventListener("click", function() {
    input.textContent = "9" ;

});
eight.addEventListener("click", function() {
    input.textContent = "8" ;
});
seven.addEventListener("click", function() {
    input.textContent = "7";
});
six.addEventListener("click", function() {
    input.textContent = "6";
});
five.addEventListener("click", function() {
    input.textContent = "5";
});
four.addEventListener("click", function() {
    input.textContent = "4";
});
three.addEventListener("click", function() {
    input.textContent = "3";
});
two.addEventListener("click", function() {
    input.textContent = "2";
});
one.addEventListener("click", function() {
    input.textContent = "1";
});
zero.addEventListener("click", function() {
    input.textContent = "0";
});
dot.addEventListener("click", function() {
    input.textContent = ".";
});

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