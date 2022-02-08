import validator from "./validator.js";

console.log(validator);

let box = document.getElementById("numero");
const send = document.getElementById("enviar");
send.addEventListener("click", getNumber);
let isValid;
let mask;
let txt = document.getElementById("txt");
let txtValid = "válida";
let txtInvalid = "inválida";

function getNumber() {
  const number = box.value;
  console.log(number);
  isValid = validator.isValid(number);
  mask = validator.maskify(number);

  if (isValid) {
    txt.innerHTML = txtValid;
    box.value = mask;
  } else {
    txt.innerHTML = txtInvalid;
  }
}
