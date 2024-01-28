/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2
};
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2){
    return number1 - number2
};
const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */

const multiply = (x,y)  => x * y;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById('factor2').value);
    let product = multiply(factor1, factor2);
    document.getElementById('product').value = product;

};

document.getElementById('multiplyNumbers').addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (x,y)  => x /y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;

};

document.getElementById('divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotal() {

    let subtotal = parseFloat(document.getElementById("subtotal").value);

    if (document.getElementById("member").checked) {
        subtotal = subtotal * 0.8;
    }
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click",getTotal);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13] 
document.getElementById("array").innerText = numbersArray.join(", ");

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function(number) {
    return number % 2 !== 0;
  });
document.getElementById("odds").innerText = oddNumbers.join(", ");
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(", ");;
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(number => number *2)

/* Output Sum of Multiplied by 2 Array */

document.getElementById("sumOfMultiplied").innerHTML = numbersArray.map(number => number *2).reduce((sum, number) => sum + number)