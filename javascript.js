function add(num1, num2) {
    let sum = Number(num1) + Number(num2);
    sum = Math.round(sum * 100) / 100
    return sum.toString();
};

function subtract(num1, num2) {
	let sum = Number(num1) - Number(num2);
    sum = Math.round(sum * 100) / 100
    return sum.toString();
};

function multiply(num1, num2) {
	let sum = Number(num1) * Number(num2);
    sum = Math.round(sum * 100) / 100
    return sum.toString();
};

function divide(num1, num2) {
	let sum = Number(num1) / Number(num2);
    sum = Math.round(sum * 100) / 100
    return sum.toString();
};


let firstNumber = '';
let secondNumber = '';
let operator = '';
let operatorResult // display value



function operate(firstNum, operator, secondNum){
    if (operator === '+'){
        operatorResult = add(firstNum, secondNum);
        console.log('Add function');
    } else if (operator === '-'){
        operatorResult = subtract(firstNum, secondNum);
        console.log('Subtract function');
    } else if (operator === '*'){
        operatorResult = multiply(firstNum, secondNum);
        console.log('Multiply function');
    } else if (operator === '/'){
        operatorResult = divide(firstNum, secondNum);
        console.log('Divide function');
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
            console.log('added ' + numButtonInputValue + ' too 2nd number')
            displayNum2(secondNumber);
        } else {
            // firstNumber = Number(numButtonInputValue);
            firstNumber += numButtonInputValue;
            displayNum1(firstNumber);
            console.log(firstNumber + ' first num var');
        }
    })
};

// Adding event listeners operator buttons
let operatorButton = document.getElementsByClassName('operator-btn');

for (button of operatorButton) {
    button.addEventListener('click', function(){
        const operatorButtonInputValue = this.value; // Get current operator button value
        console.log('operator button clicked');

        if (operator.length == 0){
            operator = operatorButtonInputValue;
            console.log(operator + ' operator added')
            displayOpe(operator);
        }
    })
}

// Displaying numbers
const displayNumber1 = document.querySelector('#displaynum1');
function displayNum1 (num1){
    displayNumber1.textContent = '';
    displayNumber1.textContent = num1;
    displayValue.textContent = '';
}

const displayNumber2 = document.querySelector('#displaynum2');
function displayNum2 (num2){
    displayNumber2.textContent = '';
    displayNumber2.textContent = num2;
    displayValue.textContent = '';
}

const displayOperator = document.querySelector('#displayoperator');
function displayOpe (operator){
    displayOperator.textContent = '';
    displayOperator.textContent = operator;
    displayValue.textContent = '';
}

const displayValue = document.getElementById('displayvalue');

// displaying on load
displayNum1(firstNumber);
displayNum2(secondNumber);
displayOpe(operator);


// calculate function (= button)
const calculateButton = document.getElementById('result');

calculateButton.addEventListener('click', function() {
    operate(firstNumber, operator, secondNumber);
    console.log(operatorResult + ' display value');

    // clears sum
    firstNumber = '';
    secondNumber = '';
    operator = '';


    displayNum1(firstNumber);
    displayNum2(secondNumber);
    displayOpe(operator);

    // Clears previous appended content
    displayValue.textContent = '';
    displayValue.textContent = operatorResult;

    console.log(typeof operatorResult);
});


// clear button
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    // Clears all previous appended content
    firstNumber = '';
    secondNumber = '';
    operator = '';
    operatorResult = '';
    
    displayValue.textContent = '';
    displayNumber1.textContent = '';
    displayNumber2.textContent = '';
    displayOperator.textContent = '';
});


