function press(value){
document.getElementById("display").value += value;
}

function calculate(){
let display = document.getElementById("display");

try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}
}

function clearDisplay(){
document.getElementById("display").value = "";
}

function developer(){
alert("Developer: Felma Pamat");
}

function application(){
alert("Application: Standard Calculator\nVersion: 1.0\nTechnology: HTML, CSS, JavaScript");
}
