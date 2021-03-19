let output = document.querySelector('.output')
let buttons = document.querySelectorAll('.calculator button')

let num = ''
let expression = ''
let checkNum = false
let operations = ['+', '-', '/', '*']

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let currentValue = btn.textContent
        if (currentValue === 'C') {
            clear()
        } else if (currentValue === '=') {
            result()
        } else if (operations.includes(currentValue)) {
            if (operations.includes(expression[expression.length - 1])){
                expression = expression.slice(0, expression.length -1) + currentValue
            } else {
                if (checkNum === false) {
                    expression = expression + currentValue
                    checkNum = true
                } else {
                    output.textContent = eval(expression)
                    expression = eval(expression) + currentValue
                    console.log(expression)
                }
            }
            num = ''
        } else {
            addNumber(currentValue)
        }
    })
})

function clear() {
    output.textContent = '0'
    expression = ''
    num = ''
}
function result() {
    output.textContent = eval(expression)
    num = ''
}

function addNumber(currentValue) {
    num = num + currentValue
    expression = expression + currentValue
    output.textContent = num
}

