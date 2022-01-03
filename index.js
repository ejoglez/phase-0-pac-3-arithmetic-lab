// basic math
function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

// integers
function makeInt(n){
const parsed = parseInt(n,10);
if (isNaN(parsed)) {return NaN;}
return parsed;

}
//decimals 
function preserveDecimal(n){
    return parseFloat(n);
}

// increment and decrements
let n=1;

function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}
