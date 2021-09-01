let total = 0, userInput = "0", prevPress;
let operator = null;

let screen = document.querySelector(".word");

document.querySelector(".integers").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
})

document.querySelector(".operations").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
})

function buttonClick(value){
    console.log(value);

    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(userInput === "0"){
        userInput = value;
    }
    else{
        userInput += value;  
    }
}

function handleSymbol(value){
    switch (value){
        case 'C':
            userInput = "0";
            total = 0;
            operator = null;
            break;
        case 'Delete':
            userInput = userInput.slice(0, -1);
            break;
        case '=':
            if(operator === null){
                return;
            }
            flushOperation(parseInt(userInput));
            operator = null;
            userInput = "" + total;
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleMath(value){
    const intBuffer = parseInt(userInput);
    
    if(total === 0){
        total = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }

    operator = value;
    userInput = "0";
}

function flushOperation(intBuffer){
    
    switch (operator){
        case '+':
            total += intBuffer;
            break;
        case '-':
            total -= intBuffer;
            break;
        case '/':
            total /= intBuffer;
            break;
        case '*':
            total *= intBuffer;
            break;
        case '%':
            total %= intBuffer;
            break;
    }
}

function rerender(){
    screen.innerText = userInput;
}