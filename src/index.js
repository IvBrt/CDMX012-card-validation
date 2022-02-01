import validator from "./validator.js";

console.log(validator);

let box = document.getElementById("numero");
const send = document.getElementById("enviar");
send.addEventListener("click", getNumber);
let getTotal;
let mask;
let txt = document.getElementById("texto");
let txtValid = "valid";
let txtInvalid = "invalid";

function getNumber() {
  const number = box.value;
  console.log(number);
  getTotal = validator.isValid(number);
  mask = validator.maskify(number);

  if (getTotal % 10 === 0) {
    txt.innerHTML = txtValid;
    box.value = mask;
  } else {
    txt.innerHTML = txtInvalid;
  }
}
