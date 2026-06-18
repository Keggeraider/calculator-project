const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let input = [];
let a = null;
let b = null;
let calcDisplay = "";
let operator = [];

const display = document.querySelector('.calcDisplay');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operations button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.parentNode.className === "digits" && (e.target.id !== "ac" || e.target.id !== "compute")) {
            input.push(e.target.textContent);
            calcDisplay += e.target.textContent;
        } else if  (e.target.parentNode.className === "operators") {
            calcDisplay = e.target.textContent;
            operator.push(e.target.textContent);
            if (a === null) {
                a = input.shift();
                while (input.length > 0) {
                    a += input.shift();
                }
            } else if (b === null) {
                b = input.shift();
                while (input.length > 0) {
                    b += input.shift()
                }
            }
        } else if (e.target.id === "compute") {

        }
        display.textContent = calcDisplay;
        console.log(e.target.parentNode.className);
        console.log(e.target.id);
        console.log(calcDisplay);
        console.log(input);
        console.log("a = ", a);
        console.log("b = ", b);
    });
});

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