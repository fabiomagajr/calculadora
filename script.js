function digitaNumero(numberString){
    if(buffer==='0'){
        buffer=numberString;
    }else{
        buffer+=numberString;
    }
}


let runninTotal=0;
let buffer ="0";
let preivousOperator;
const screen = document.querySelector('.screen');
function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
        alert('vc apertou uma operação')
    }else{
        handleNumber(value);
    }
    screen.innerText=buffer;
    
}
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer='0';
            runninTotal=0;
            break;
        case '=':
            if(preivousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            preivousOperator = null;
            buffer = runninTotal;
            runninTotal=0;
            
            break;
        case '←':
            if(buffer.length===1){
                buffer='0';

            }else{
                buffer=buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
                
        }
}
function handleMath(symbol){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);
    if(runninTotal===0){
        runninTotal=intBuffer;

    }else{
        flushOperation(intBuffer);
    }
    preivousOperator = symbol;
    buffer='0';
}
function flushOperation(intBuffer){
    if(preivousOperator==='+'){
        runninTotal+=intBuffer;
    }else if(preivousOperator==='−'){
        runninTotal-=intBuffer;
    }else if(preivousOperator==='×'){
        runninTotal*=intBuffer;
    }else if(preivousOperator==='÷'){
        runninTotal /= intBuffer;
    }
}
function handleNumber(numberString){
    if(buffer==='0'){
        buffer=numberString;
        alert('digitou um numero e acionou o handleNumber');
    }else{
        buffer+=numberString;
        alert('digitou um numero e acionou mais um numero ao handleNumber');
    }
}
function init(){
    document.querySelector('.calc-buttons').
    addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    })
}
init();