let num1 = 8
let num2 = 6

let n1 = document.getElementById("num1-el").innerText = num1;
let n2 = document.getElementById("num2-el").innerText = num2;

function add(){
    let sum = num1+num2
    document.getElementById("res-el").innerText="Result: " + sum
}
function subtract(){
    let difference = num1-num2
    document.getElementById("res-el").innerText="Result: " + difference
}
function multiply(){
    let product = num1*num2
    document.getElementById("res-el").innerText="Result: " + product
}
function divide(){
    let quotient = num1/num2
    document.getElementById("res-el").innerText="Result: " + quotient
}

