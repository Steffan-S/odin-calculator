function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
	return num1 * num2;
};

function divide(num1, num2) {
	return num1 / num2;
};

console.log(add(10, 10) + ' add');
console.log(subtract(10, 5) + ' subtract');
console.log(multiply(5, 5) + ' multiply');
console.log(divide(8, 2) + ' divide');

let firstNumber = 4;
let secondNumber = 2;
let operator = '-';
let operatorResult;

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

operate(firstNumber, operator, secondNumber);
console.log(operatorResult + ' operate result');