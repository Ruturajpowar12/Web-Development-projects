const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allclear]')
const previousOperandElement = document.querySelector('[data-previous]')
const currentOperandElement = document.querySelector('[data-current]')

class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement
        this.clear()
    }

    clear() {
        this.currentOperand = '0'
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
        if (this.currentOperand === '') this.currentOperand = '0'
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString()
        } else {
            this.currentOperand += number.toString()
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+': computation = prev + current; break
            case '-': computation = prev - current; break
            case '*': computation = prev * current; break
            case '÷':
                if (current === 0) {
                    this.currentOperand = 'Error'
                    return
                }
                computation = prev / current
                break
            default: return
        }

        this.currentOperand = computation.toString()
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        if (number === 'Error') return number

        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]

        let integerDisplay = isNaN(integerDigits) ? '0' :
            integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })

        return decimalDigits != null
            ? `${integerDisplay}.${decimalDigits}`
            : integerDisplay
    }

    updateDisplay() {
        this.currentOperandElement.innerText =
            this.getDisplayNumber(this.currentOperand)

        this.previousOperandElement.innerText =
            this.operation != null
                ? `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
                : ''
    }
}

const calculator = new Calculator(previousOperandElement, currentOperandElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})