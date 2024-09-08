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

function updateDisplay(newValue){
    displayValue = newValue
    display.innerText = displayValue
}


function clickNumber(number){
    if (chainOperation){
        chainOperation = false
        updateDisplay(number)
    } else {
        updateDisplay(displayValue + number)
    }
}

function clearInput(){
    firstVar = null
    secondVar = null
    operator = null
    updateDisplay('')
}

function selectOperation(operation){

    let existingOperation = false

    if (operator !== null){
        showResult()
        existingOperation = true
        chainOperation = true
    }
    
    switch (operation){
        case 'add':
            operator = add
            break
        case 'subtract':
            operator = subtract
            break
        case 'multiply':
            operator = multiply
            break
        case 'divide':
            operator = divide
            break
    }

    

    if (!existingOperation){
        firstVar = Number(displayValue)
        updateDisplay('')
    }

    
}

function showResult(){
    if (firstVar === null || operator === null){
        return
    }

    secondVar = Number(displayValue)
    let result = operate(firstVar,operator,secondVar)
    updateDisplay(result)
    firstVar = result
    operator = null
}

let firstVar = null
let secondVar = null
let operator = null

let chainOperation = false

let display = document.querySelector('#display')
let displayValue = ""

document.querySelectorAll('.number')
    .forEach(number => {
        number.addEventListener('click', e => {
        clickNumber(e.target.innerText)
    })
    })

document.querySelector('#clear').addEventListener('click', clearInput)

document.querySelectorAll('.operator')
    .forEach(operator => {
        operator.addEventListener('click', e => {
            selectOperation(e.target.id)
        })
    })

document.querySelector('#equals').addEventListener('click', showResult)