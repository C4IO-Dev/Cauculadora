let currentInput = '';
let previousInput = '';
let operation = '';

// JavaScript
document.querySelectorAll("button").forEach(button => {
    // Função para lidar com o evento touchstart
    button.addEventListener("touchstart", () => {
        button.classList.add("hover"); // Adiciona a classe hover temporariamente
        setTimeout(() => {
            button.classList.remove("hover"); // Remove a classe hover após um pequeno atraso
        }, 100);
    });

    // Eventos mouseenter e mouseleave continuam para dispositivos desktop
    button.addEventListener("mouseenter", () => {
        button.classList.add("hover");
    });

    button.addEventListener("mouseleave", () => {
        button.classList.remove("hover");
    });
});

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