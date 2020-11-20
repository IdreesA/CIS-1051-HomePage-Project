
/*
let calcbutton = document.querySelector('#CalcSubmit');
let body = document.querySelector('body');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');


*/

function squareAmount(){
	var root = document.getElementById('rootvalue').value;
	root = Number(root);
	var square = root * root;
	document.querySelector('#squareResultText').innerHTML = "Result: " + square;

}

function contactResponse(){
	alert("Thanks for reaching out to us! We'll be getting back to you soon.");
}  //Still need to figure out why this part is not working