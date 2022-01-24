import validator from './validator.js';

console.log(validator);

const box = document.getElementById("numero");

const send = document.getElementById("enviar");
send.addEventListener("click", getNumber);

function getNumber() {
 const number = box.value;
 console.log(number); 
 validator.isValid(number);
}
