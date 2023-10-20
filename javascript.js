// calculate functions
function add(num1, num2) {
    return (Math.round((Number(num1) + Number(num2)) * 100) / 100).toString();
};

function subtract(num1, num2) {
	return (Math.round((Number(num1) - Number(num2)) * 100) / 100).toString();
};

function multiply(num1, num2) {
	return (Math.round((Number(num1) * Number(num2)) * 100) / 100).toString();
};

function divide(num1, num2) {
	return (Math.round((Number(num1) / Number(num2)) * 100) / 100).toString();
};


let firstNumber = '';
let secondNumber = '';
let operator = '';
let operatorResult // display value
const errorMessage = 'ERROR :('


function operate(firstNum, operator, secondNum){
    if (operator === '+'){
        operatorResult = add(firstNum, secondNum);
    } else if (operator === '-'){
        operatorResult = subtract(firstNum, secondNum);
    } else if (operator === '*'){
        operatorResult = multiply(firstNum, secondNum);
    } else if (operator === '/'){
        if (secondNum === '0'){
            operatorResult = "Can't do that!";  
        } else {
        operatorResult = divide(firstNum, secondNum);
        }
    } 
    return operatorResult
}


// Adding event listeners number buttons
let numberButtons = document.getElementsByClassName('number-btn');

for (button of numberButtons) {
    button.addEventListener('click', function(){
        const numButtonInputValue = this.value; // Get current num button value
        
        if (operator === '*' || operator === '+' || operator === '-' || operator === '/'){
            // secondNumber = Number(numButtonInputValue);
            secondNumber += numButtonInputValue;
            displayNum2(secondNumber);
        } else {
            // firstNumber = Number(numButtonInputValue);
            firstNumber += numButtonInputValue;
            displayNum1(firstNumber);
        }
    })
};

// Adding event listeners operator buttons
let operatorButton = document.getElementsByClassName('operator-btn');

for (button of operatorButton) {
    button.addEventListener('click', function(){
        const operatorButtonInputValue = this.value; // Get current operator button value

        if (operator.length == 0){
            operator = operatorButtonInputValue;
            displayOpe(operator);
        }
    })
};

// Displaying numbers
const displayNumber1 = document.querySelector('#displaynum1');
function displayNum1 (num1){
    displayNumber1.textContent = '';
    displayNumber1.textContent = num1;
    displayValue.textContent = '';
};

const displayNumber2 = document.querySelector('#displaynum2');
function displayNum2 (num2){
    displayNumber2.textContent = '';
    displayNumber2.textContent = num2;
    displayValue.textContent = '';
};

const displayOperator = document.querySelector('#displayoperator');
function displayOpe (operator){
    displayOperator.textContent = '';
    displayOperator.textContent = operator;
    displayValue.textContent = '';
};

const displayValue = document.getElementById('displayvalue');

// calculate function (= button)
const calculateButton = document.getElementById('result');

calculateButton.addEventListener('click', function() {    
    

    if (operate === '' || secondNumber === ''){
        clearNumbers();
        displayValue.textContent = errorMessage;
    } else {
    operate(firstNumber, operator, secondNumber);

    // clears sum
    clearNumbers();

    // Clears previous appended content
    displayValue.textContent = '';
    firstNumber = operatorResult;
    displayNumber1.textContent = firstNumber;
    }
});

function clearNumbers (){
    firstNumber = '';
    secondNumber = '';
    operator = '';


    displayNum1(firstNumber);
    displayNum2(secondNumber);
    displayOpe(operator);
};


// clear button
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    // Clears all previous (appended) content
    firstNumber = '';
    secondNumber = '';
    operator = '';
    operatorResult = '';
    
    displayValue.textContent = '';
    displayNumber1.textContent = '';
    displayNumber2.textContent = '';
    displayOperator.textContent = '';
});


