let total = 0, userInput = "0", prevPress;

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
}

function handleNumber(value){
    if(userInput === "0"){
        userInput = value;
    }
    else{
        userInput += value;  
    }
    rerender();
}

function handleSymbol(value){
    switch (value){
        case 'C':
            userInput = "0";
            total = 0;
            break;
        case '%':
            userInput += "%";
            break;
        case 'Delete':
            userInput = userInput.slice(0, -1);
            break;
        case '/':
            userInput += "/";
            break;
        case '*':
            userInput += "*";
            break;
        case '-':
            userInput += '-';
            break;
        case '+':
            userInput += '+';
            break;
        case '=':
            userInput += '=';
            
            break;
    }
    rerender();
}

function rerender(){
    screen.innerText = userInput;
}