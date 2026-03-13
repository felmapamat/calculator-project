let current = "";
let operatorValue = "";
let previous = "";

function press(num){
current += num;
document.getElementById("display").value = current;
}

function operator(op){

if(current === "") return;

previous = current;
operatorValue = op;

document.getElementById("history").innerText = previous + " " + op;
current = "";
document.getElementById("display").value = "";
}

function calculate(){

let result;

let prev = parseFloat(previous);
let curr = parseFloat(current);

switch(operatorValue){

case "+":
result = prev + curr;
break;

case "-":
result = prev - curr;
break;

case "*":
result = prev * curr;
break;

case "/":
result = prev / curr;
break;

}

document.getElementById("display").value = result;
document.getElementById("history").innerText = previous + " " + operatorValue + " " + current;

current = result.toString();
}

function clearDisplay(){
current="";
previous="";
operatorValue="";
document.getElementById("display").value="";
document.getElementById("history").innerText="";
}

function developer(){
alert("Developer: Felma Pamat");
}

function application(){
alert("Application: Smart Web Calculator\nVersion: 1.0\nBuilt using HTML, CSS, JavaScript");
}
