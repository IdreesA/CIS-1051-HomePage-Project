
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

