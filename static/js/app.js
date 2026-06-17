const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let newNum = 0;
let operator = "";

const display = document.querySelector('.calcDisplay');
const digits = document.querySelectorAll('.digits button');
const operators = document.querySelectorAll('.operations button');

digits.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        newNum = e.target.textContent;
        display.textContent = newNum;
        console.log("newNum = ", newNum);
    });
});
/*numB = digits.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.textContent);
            numB = e.target.textContent;
            display.textContent = numB;
            console.log("numB = ", numB);
        });
    });*/


function getOperation() {
    operators.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.textContent);
            operator = e.target.textContent;
            display.textContent = operator;
        });
    });
}



// operator = getOperation();

function operate() {
    let result = 0;

    if (operator === "+") {
        result = add(numA, numB);
    } else if (operator === "-") {
        result = subtract(numA, numB);
    } else if (operator === "*") {
        result = multiply(a,b);
    } else if (operator === "&divide;") {
        result = divide(a,b);
    }

    display.textContent = result;
}