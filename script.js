const current_number = document.querySelector('.current_number');
const previous_number = document.querySelector('.previous_number p');
const math_sign = document.querySelector('.math_sign');
const number_buttons = document.querySelectorAll('.number');
const operator_buttons = document.querySelectorAll('.operator');
const equals_button = document.querySelector('.equals');
const clear_button = document.querySelector('.clear');
const delate = document.querySelector('.delate');
const calculator_history = document.querySelector('.history');
const history_btn = document.querySelector('.history_btn');


let previous_operation = '';
let current_operation = '';
let result = '';

//funkcje

function display_numbers () 
{   
    if(this.textContent === '.' && current_number.innerHTML.includes('.')) return;
    if(this.textContent === '.' && current_number.innerHTML === '') return current_number.innerHTML = '0.0';
    // if(this.textContent === '0' && current_number.innerHTML.includes('0')) return;
    // if(this.textContent === '0' && current_number.innerHTML === '') return current_number.innerHTML = '0';  
    current_number.innerHTML += this.textContent;
}

function operate () 
{
    if(current_number.innerHTML === '' && this.textContent === '+/-') 
    {
        current_number.innerHTML = '-';
        return;
    }
    if(current_number.innerHTML === '-' && this.textContent === '+/-') 
    {
        current_number.innerHTML = '';
        return;
    }
    else if (current_number.innerHTML === '') 
    {
        return;
    }
    if(math_sign.innerHTML !== '') 
    {
        show_results();
    }

    previous_number.innerHTML = current_number.innerHTML;
    math_sign.innerHTML = this.textContent;
    current_number.innerHTML = '';
}

function show_results () 
{
    if(previous_number.innerHTML === '' || current_number.innerHTML === '') return;

    let a = Number(current_number.innerHTML);
    let b = Number(previous_number.innerHTML);
    let operator = math_sign.innerHTML;

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
                clear_screen();
                break;
            }
            else
            {
                result = b / a;
                break;
            } 
        default:
            clear_screen();
            return;
    }
//dodać funkcję, aby program nie dodawał do historii błędnych wyników np. samo '='

    add_to_history();
    history_btn.classList.add('active');
    current_number.innerHTML = result;
    previous_number.innerHTML = '';
    math_sign.innerHTML = '';

}

function update_result () 
{
    current_result.innerHTML = current_operation
    if(operation != null) {
        previous_result.innerHTML = previous_operation + operation
    }
    else {
        previous_operation.innerHTML = ''
    }
}

function add_to_history () 
{
    const new_history_item = document.createElement('li');
    new_history_item.innerHTML = `${previous_number.innerHTML} ${math_sign.innerHTML} ${current_number.innerHTML} = ${result}`
    new_history_item.classList.add('history_item');
    calculator_history.appendChild(new_history_item);
}

function clear_history () 
{
    calculator_history.textContent = '';
    if(calculator_history.textContent === '') {
        history_btn.classList.remove('active');
    }
}

function clear_screen () 
{
    result = '';
    current_number.innerHTML = '';
    previous_number.innerHTML = '';
    math_sign.innerHTML = '';
}

function delate_number () 
{
    current_number.innerHTML = current_number.innerHTML.slice(0, -1);
}

//nasłuchiwanie przycisków

operator_buttons.forEach((button) => button.addEventListener('click', operate));

equals_button.addEventListener('click', show_results, update_result);

clear_button.addEventListener('click', clear_screen);

number_buttons.forEach((button) => {
    button.addEventListener('click', display_numbers)
});

history_btn.addEventListener('click', clear_history);

delate.addEventListener('click', delate_number);
