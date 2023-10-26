let currentInput = '';
let previousInput = '';
let operation = '';

function updateResult() {
    const resultElement = document.getElementById('res');
    resultElement.textContent = currentInput;
}

function setNumber(num) {
    currentInput += num;
    updateResult();
}

function executeOperation() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    switch (operation) {
        case '+':
            currentInput = (num1 + num2).toString();
            break;
        case '-':
            currentInput = (num1 - num2).toString();
            break;
        case 'x':
            currentInput = (num1 * num2).toString();
            break;
        case '/':
            if (num2 === 0) {
                currentInput = 'Erro';
            } else {
                currentInput = (num1 / num2).toString();
            }
            break;
    }
}

function adicao() {
    executeOperation();
    previousInput = currentInput;
    currentInput = '';
    operation = '+';
    updateResult();
}

function subtrai() {
    executeOperation();
    previousInput = currentInput;
    currentInput = '';
    operation = '-';
    updateResult();
}

function multiplica() {
    executeOperation();
    previousInput = currentInput;
    currentInput = '';
    operation = 'x';
    updateResult();
}

function divide() {
    executeOperation();
    previousInput = currentInput;
    currentInput = '';
    operation = '/';
    updateResult();
}

function calcular() {
    executeOperation();
    operation = '';
    updateResult();
}

function limpar() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateResult();
}

function apagar() {
    currentInput = currentInput.slice(0, -1);
    updateResult();
}

function ponto() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateResult();
    }
}