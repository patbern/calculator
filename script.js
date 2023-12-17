const currentNumber = document.querySelector('.current-number');
const previousNumber = document.querySelector('.previous-number p');
const mathSign = document.querySelector('.math-sign');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const delate = document.querySelector('.delate');
const calculatorHistory = document.querySelector('.history');
const historyBtn = document.querySelector('.history-btn');
const minus = document.querySelector('.minus')

let result = '';
let divisionByZeroBlocked = false;

//funkcje

function displayNumbers () 
{   
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.0';
    else 
    {
        // Usuwanie zbędnych zer przed liczbą (z wyjątkiem sytuacji, gdy liczba to zero z kropką)
        if (!(this.textContent === '0' && currentNumber.innerHTML === '0.')) 
        {
            currentNumber.innerHTML = currentNumber.innerHTML.replace(/^0+/, '');
        }
    }
    currentNumber.innerHTML += this.textContent;
}

function operate () 
{
    if(mathSign.innerHTML !== '') 
    {
        showResults();
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResults () 
{
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) 
    {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case '×':
            result = a * b;
            break;            
        case '÷':
            if(a === 0 || b === 0)
            {
                alert("Niepoprawna operacja: dzielenie przez 0. \nWybierz inną liczbę :)");
                divisionByZeroBlocked = true;
                clearScreen();
                return;
            }
            else
            {
                result = b / a;
                break;
            } 
        default:
            clearScreen();
            return;
    }

    addToHistory();
    historyBtn.classList.add('active');
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function addToHistory () 
{
    if(divisionByZeroBlocked = true) {
        const newHistoryItem = document.createElement('li');
        newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`
        newHistoryItem.classList.add('history-item');
        calculatorHistory.appendChild(newHistoryItem);
    }
    divisionByZeroBlocked = false;
}

function clearHistory () 
{
    calculatorHistory.textContent = '';
    if(calculatorHistory.textContent === '') {
        historyBtn.classList.remove('active');
    }
}

function clearScreen () 
{
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function delateNumber () 
{
    currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1);
}

function addMinus ()
{
    if(currentNumber.innerHTML === '' && this.textContent === '+/-') 
    {
    currentNumber.innerHTML = '-';
    return;
    }
        else 
        {
        if(currentNumber.innerHTML.includes('-') && this.textContent === '+/-') 
        {
            currentNumber.innerHTML = currentNumber.innerHTML.replace('-', '');
            return;
        }
        else
        {
            currentNumber.innerHTML = '-' + currentNumber.innerHTML;
            return;
        }
    }
}

//nasłuchiwanie przycisków

operatorButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResults);

clearButton.addEventListener('click', clearScreen);

numberButtons.forEach((button) => 
{
    button.addEventListener('click', displayNumbers)
});

historyBtn.addEventListener('click', clearHistory);

delate.addEventListener('click', delateNumber);

minus.addEventListener('click', addMinus)
