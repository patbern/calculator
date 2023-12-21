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
const undoHistoryBtn = document.querySelector('.history-undo-btn');
const minus = document.querySelector('.minus')

let result = '';
let previousResult = ''
let currentResult = '';
let lastActionOperator = false;
const lastHistory = [];

//functions

function initializeCalculator() {
    clearScreen();
    currentResult = '0';
    currentNumber.innerHTML = '0';}

function display(event) {const buttonClicked = event.target.textContent; 
    
    if(buttonClicked === '.' && currentNumber.innerHTML.includes('.')) return;
    if(buttonClicked === '.' && currentNumber.innerHTML === '' || buttonClicked === '.' && currentNumber.innerHTML === '0') return currentNumber.innerHTML = '0.';

    if(!(buttonClicked === '0' && currentNumber.innerHTML === '0.')) {
        currentNumber.innerHTML = currentNumber.innerHTML.replace(/^0+/, '');}

    currentNumber.innerHTML += buttonClicked;
    lastActionOperator = false;}

function operate(event) {const buttonClicked = event.target.textContent;
    
    if(lastActionOperator) return;
    if(mathSign.innerHTML !== '') {calculateResults();}

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = buttonClicked;
    currentNumber.innerHTML = '';
    lastActionOperator = true;

    if(!(result === 0)) return updateResults(buttonClicked);}

function calculateResults() {

    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) {
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
            if(a === 0 || b === 0){
                alert("Invalid operation: division by 0.\nChoose another number :)");
                currentNumber.innerHTML = currentResult;
                previousNumber.innerHTML = '';
                mathSign.innerHTML = '';
                return;}
            else{
                result = b / a;
                break;} 
        default:
            clearScreen();
            return;}

    addToHistory();
    historyBtn.classList.add('active');
    undoHistoryBtn.classList.add('active');
    currentNumber.innerHTML = result;
    currentResult = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    lastActionOperator = false;}

function addToHistory() {

    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem);
    lastHistory.push(newHistoryItem.innerHTML);
    previousResult = currentResult;}

function clearHistory(event) {const buttonClicked = event.target.textContent;

    calculatorHistory.textContent = '';
    if(calculatorHistory.textContent === '') {
        historyBtn.classList.remove('active');
        undoHistoryBtn.classList.remove('active');}}

function undo(event) {const buttonClicked = event.target.textContent;

    if(lastHistory.length > 0 && buttonClicked) {calculatorHistory.removeChild(calculatorHistory.lastChild);}
    if(lastHistory.length === 0) {
        undoHistoryBtn.classList.remove('active');
        historyBtn.classList.remove('active');}
    if(previousResult !== '') {
        currentResult = previousResult;
        currentNumber.innerHTML = currentResult;
        updateResults(buttonClicked);}}

function updateResults(buttonClicked) {
    if(buttonClicked) {return previousResult;}
    else {return result}}

function clearScreen() {
    result = '';
    previousResult = '';
    currentResult = '';
    currentNumber.innerHTML = '0';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';}

function delateNumber() {
    currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1);
    lastActionOperator = false;}

function addMinus(event) {const buttonClicked = event.target.textContent;

    if(currentNumber.innerHTML === '' && buttonClicked === '+/-') {
    currentNumber.innerHTML = '-';
    return;}
        else {
        if(currentNumber.innerHTML.includes('-') && buttonClicked === '+/-') {
            currentNumber.innerHTML = currentNumber.innerHTML.replace('-', '');
            return;}
        else {
            currentNumber.innerHTML = '-' + currentNumber.innerHTML;
            return;}}}

//listening for buttons

window.addEventListener('load', initializeCalculator);
operatorButtons.forEach((button) => button.addEventListener('click', operate));
equalsButton.addEventListener('click', calculateResults);
clearButton.addEventListener('click', clearScreen);
numberButtons.forEach((button) => {button.addEventListener('click', e => display(e)), lastActionOperator = false});
historyBtn.addEventListener('click', clearHistory);
undoHistoryBtn.addEventListener('click', undo);
delate.addEventListener('click', delateNumber);
minus.addEventListener('click', addMinus);
undoHistoryBtn.addEventListener('click', undo);