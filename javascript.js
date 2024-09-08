function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(firstVar,operator,secondVar){
    return operator(firstVar,secondVar)
}


function clickNumber(number){
    displayValue = displayValue + number
    display.innerText = displayValue
}

let firstVar = 0
let secondVar = 0
let operator = add

let display = document.querySelector('#display')
let displayValue = ""

document.querySelectorAll('.number')
    .forEach(number => {
        number.addEventListener('click', e => {
        clickNumber(e.target.innerText)
    })
    })