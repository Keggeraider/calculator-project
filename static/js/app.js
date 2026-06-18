const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let input = [];
let a = null;
let b = null;
let calcDisplay = "";
let operator = [];
let result = 0;

const display = document.querySelector('.calcDisplay');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operations button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.parentNode.className === "digits" && (e.target.id !== "ac" && e.target.id !== "compute")) {
            input.push(e.target.textContent);
            if (calcDisplay == 0) {
                calcDisplay = e.target.textContent;
            } else {calcDisplay += e.target.textContent;}

        } else if  (e.target.parentNode.className === "operators") {
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
            } else if (a !== null && b !== null) {
                operate();
                calcDisplay = result;
                a = result;
                b = null;
            }
        } else if (e.target.id === "compute") {
            operate();
            calcDisplay = result;
        } else if (e.target.id === "ac"){
            a = null;
            b = null;
            input = [];
            operator = [];
            calcDisplay = "0";
            result = null;
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
    let symbol = operator.shift();
    if (symbol === "+") {
        result = add(a, b);
    } else if (symbol === "-") {
        result = subtract(a, b);
    } else if (symbol === "*") {
        result = multiply(a, b);
    } else if (symbol === "&divide;") {
        result = divide(a, b);
    }

    display.textContent = result;
}