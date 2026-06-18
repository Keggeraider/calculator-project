const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let input = [];
let a = null;
let b = null;
let calcDisplay = "";
let operator = [];
let result = null;

const display = document.querySelector('.calcDisplay');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operations button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.parentNode.className === "digits" && (e.target.id !== "ac" && e.target.id !== "compute")) {
            input.push(e.target.textContent);
            if (calcDisplay == 0) {
                calcDisplay = e.target.textContent;
            } else {
                calcDisplay += e.target.textContent;
            }
            display.textContent = calcDisplay;
        } else if  (e.target.parentNode.className === "operators") {
            calcDisplay = "";
            operator.push(e.target.textContent);
            if (a === null) {
                if (result === null) {
                    a = input.shift();
                    while (input.length > 0) {
                        a += input.shift();
                    }
                } else {a = result};
            } else if (b === null && input.length > 0) {
                b = input.shift();
                while (input.length > 0) {
                    b += input.shift()
                }
                operate(parseFloat(a), parseFloat(b));
                calcDisplay = Math.round(result * 100) / 100;
                a = result;
                b = null;
                display.textContent = calcDisplay;
                calcDisplay = "";
            } 
        } else if (e.target.id === "compute") {
            if (a === null) {
                calcDisplay = a;
            } else if (b === null && input.length > 0) {
                b = input.shift();
                while (input.length > 0) {
                    b += input.shift()
                }
                operate(parseFloat(a), parseFloat(b));
                calcDisplay = Math.round(result * 100) / 100;
                a = null;
                b = null;
                display.textContent = calcDisplay;
            }
        } else if (e.target.id === "ac"){
            a = null;
            b = null;
            input = [];
            operator = [];
            calcDisplay = "0";
            result = null;
            display.textContent = calcDisplay;
        }
        // display.textContent = calcDisplay;
        console.log(e.target.parentNode.className);
        console.log(e.target.id);
        console.log(calcDisplay);
        console.log(input);
        console.log(operator);
        console.log("a = ", a);
        console.log("b = ", b);
        console.log(result);
    });
});

function operate(a, b) {
    let symbol = operator.shift();
    if (symbol == "+") {
        result = add(a, b);
    } else if (symbol == "-") {
        result = subtract(a, b);
    } else if (symbol == "*") {
        result = multiply(a, b);
    } else if (symbol == "÷") {
        result = divide(a, b);
    }
}