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
alert("Developer: Your Name\nStudent ID: 123456\nCourse: Web Development");
}

function application(){
alert("Application: Standard Web Calculator\nVersion: 1.0\nFunctions: + - * /");
}