const mainContainer = document.getElementsByClassName("mainContainer");
const displayBox = document.getElementById("displayBox");
const opSection = document.getElementsByClassName("opSection");
const miscOperator = document.getElementsByClassName("miscOperator");
const operator = document.getElementsByClassName("operator");
const digits = document.getElementsByClassName("digits");
const equals = document.getElementById("equals");

const digitsArray = [...digits];
const operatorArray = [...operator];


const clearbtn = document.getElementById("clear");
const decimalbtn = document.getElementById("decimal");
const backbtn = document.getElementById("back");
const signChangebtn = document.getElementById("signChange");



let firstNumber = 0;
let secondNumber = 0;
let displayValue = 0;
let mathOperation = 0;

displayBox.textContent = displayValue; // To keep default value as 0


function clearAll(){
    firstNumber = 0;
    secondNumber = 0;
    displayValue = 0;
    mathOperation = 0;
    displayBox.textContent = displayValue;
}

// Following 4 are operation functions
function sum(a,b) {
    let rslt= Number(a) + Number(b);
    return rslt;    
}

function subtract(a,b) {
    let rslt= Number(a) - Number(b);
    return rslt;    
}

function product(a,b) {
    let rslt= Number(a) * Number(b);
    return rslt;    
}

function division(a,b) {
    let rslt= Number(a) / Number(b);
    return rslt;    
}


// using event listener here to display the number being clicked. 
digitsArray.forEach((item) => {
    item.addEventListener("click", function() {
        let strSecondNumber = secondNumber.toString()
        let someN;
        if (secondNumber == 0 && strSecondNumber.indexOf(".") == -1){
            // alert("Hennnn")
            displayBox.textContent = event.target.textContent;
            secondNumber = event.target.textContent;
        }
        else {
            // alert(typeof(secondNumber))
            someN = secondNumber.concat(event.target.textContent);
            displayBox.textContent = someN;
            secondNumber = someN;
            // alert(secondNumber)
        }

    });
});


//  using event listener here to assign numbers to variables to do the math operation.
operatorArray.forEach((item) => {
    item.addEventListener("click",function(){
        mathOperation = event.target.textContent;
        if (firstNumber == 0){
            // mathOperation = event.target.textContent;
            firstNumber = secondNumber;
            secondNumber = 0;
        }

        // else (alert("check later"))})
        else if (firstNumber != 0 && secondNumber != 0){
            if (mathOperation == "+"){
                displayBox.textContent = sum(firstNumber,secondNumber);
                firstNumber = sum(firstNumber,secondNumber);
                secondNumber = 0;
            }
    
            else if (mathOperation == "-"){
                // alert(firstNumber);
                // alert(secondNumber);
                displayBox.textContent = subtract(firstNumber,secondNumber);
                firstNumber = subtract(firstNumber,secondNumber);
                secondNumber = 0;
            }
    
            else if (mathOperation == "*"){
                displayBox.textContent = product(firstNumber,secondNumber);
                firstNumber = product(firstNumber,secondNumber);
                secondNumber = 0;
            }
    
            else if (mathOperation == "/"){
                displayBox.textContent = division(firstNumber,secondNumber);
                firstNumber = division(firstNumber,secondNumber);
                secondNumber = 0;
            }
        }

        else if (secondNumber == 0){
            // alert("what?")
        }
    })
})



equals.addEventListener("click",function(){
        if (mathOperation == "+"){
            displayBox.textContent = sum(firstNumber,secondNumber);
            firstNumber = sum(firstNumber,secondNumber);
            secondNumber = 0;
        }

        else if (mathOperation == "-"){
            displayBox.textContent = subtract(firstNumber,secondNumber);
            firstNumber = subtract(firstNumber,secondNumber);
            secondNumber = 0;
        }

        else if (mathOperation == "*"){
            displayBox.textContent = product(firstNumber,secondNumber);
            firstNumber = product(firstNumber,secondNumber);
            secondNumber = 0;
        }

        else if (mathOperation == "/"){
            displayBox.textContent = division(firstNumber,secondNumber);
            firstNumber = division(firstNumber,secondNumber);
            secondNumber = 0;
        }
    });




clearbtn.addEventListener("click", clearAll);


decimalbtn.addEventListener("click",function(){
    // alert(secondNumber)
    let pseudoSecondNumber = secondNumber.toString()
    if (pseudoSecondNumber.indexOf(".") == -1){
        someN = pseudoSecondNumber.concat(event.target.textContent);
        displayBox.textContent = someN;
        secondNumber = someN;
        // alert(typeof(secondNumber))
    }
    else {alert("working fine I guess?")}    
})


backbtn.addEventListener("click",function(){
    // alert(secondNumber)
    let pseudoSecondNumber = secondNumber.toString()
    if (pseudoSecondNumber.length > 1){
        someN = pseudoSecondNumber.slice(0,-1);
        displayBox.textContent = someN;
        secondNumber = someN;
        // alert(typeof(secondNumber))
    }
    else {secondNumber = 0;
        displayBox.textContent = 0;
    }    
})



signChangebtn.addEventListener("click",function(){
    if (secondNumber != 0){
        let oppSignedNum = (Number(secondNumber) * -1);
        displayBox.textContent = oppSignedNum;
        secondNumber = oppSignedNum;
    } 
})