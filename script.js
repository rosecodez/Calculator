// Access elements with DOM
//numbers
document.getElementById("C");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
let result = document.getElementById("result");
const backspace = document.getElementById("backspace");
// operator
let operator = "";

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

let splitNumbers = []; 
// Function for displaying numbers
function displayNumbers() {
  numbers.addEventListener('click', ({ target }) => {
    if (!target.hasAttribute('value')) {
      return;
    }
    input.textContent += target.value;
    numberString = input.textContent;
    console.log("Number String " + numberString);
    splitNumbers = numberString.split(" "); 
    console.log("Split Array: " + splitNumbers);
  });
}
displayNumbers();

// Function for displaying operator
function displayOperator() {
  operators.addEventListener('click', ({ target }) => {
    if (!target.hasAttribute('value')) {
      return;
    }
    input.textContent += " " + target.value + " ";
    operator = target.value; 
  });
}
displayOperator();

// event listener for when equal is pressed to show up the result
equal.addEventListener("click", function() {
  let numbersArray = [];
  let operatorArray = [];
  let j = 0;
  let k = 0;
  for(let i = 0; i < splitNumbers.length; i++){
    //if we are at an even index (a number)
    if(i % 2 == 0){
      //convert number from string -> number
      splitNumbers[i] = Number(splitNumbers[i]);
      //push number from splitNumber array into new array
      numbersArray[j] = splitNumbers[i];
      j++;
    }
    else if(i % 2 == 1){
      operatorArray[k] = splitNumbers[i];
      k++;
    }
  }
  let num1 = numbersArray[0]; //first number
  let num2 = 0;
  for(let i = 0; i < numbersArray.length-1; i++){
    num2 = numbersArray[i + 1]; //second number in the numbersArray
    previousResult = operate(num1, num2, operatorArray[i]);
    num1 = previousResult;
    if(num1, num2 == 0 && operatorArray[i] == "/"){
      alert("You cannot divide by 0");
      resetInput();
    }
  }
  //console.log(previousResult);  
  //console.log(numbersArray);
  input.textContent = previousResult;
  let final = previousResult;
})

let string = '';
// let Delete = document.getElementsByClassName('del');
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'Del') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})

// Function to reset the calculator
function resetInput() {
  window.location.reload();
}
C.addEventListener('click', resetInput);

// Functions for basic math operators

// add
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber; 
}
// subtract 
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber; 
}
// multiply 
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
//divide 
function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

// Function to operate
function operate(firstNumber, secondNumber, operation) {
  if(operation == "+"){
    return add(firstNumber, secondNumber);
  }
  else if(operation == "-"){
    return subtract(firstNumber, secondNumber);
  }
  else if(operation == "*"){
    return multiply(firstNumber, secondNumber);
  }
  else if(operation == "/"){
    return divide(firstNumber, secondNumber);
  }
}