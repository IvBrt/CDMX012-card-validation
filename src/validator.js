const validator = {
  isValid: function isValid(numero) { // la propiedas de mi objeto es isValid y el valor es la función
    let cardNumber = Array.from(numero).reverse();
    let total = 0; // declaramos variable en 0
    let resultBolean;

    console.log(cardNumber);

    for (let i = 0; i < cardNumber.length; i++) {
      let non = i; // le asignmos non la posicon i = 0, i= 1, i=2 , etc en cada iteracion
      let doubles;
      if (non % 2 === 1) {
        // verificamos si es impar con el residuo
        doubles = cardNumber[i] * 2; // le asignamos a doubles el valor de cardNumber[posicion]
        console.log(doubles);
        if (doubles > 9) {
          //si doubles es mayor a 9 entra
          let numberAdd = doubles.toString().split(""); // separamos el valor de dobles
          numberAdd = parseInt(numberAdd[0]) + parseInt(numberAdd[1]); // sumamos los valores separados
          cardNumber[i] = numberAdd; // sustituimos el valor de cardNumber[posicion] por sumatoria de (numAdd[0]+numAdd[1])
        } else {
          // si no
          cardNumber[i] = doubles; //sustituimos el valor de cardNumber[posicion] por el valor de doubles
        }
      }
    } //aquí termina for
    console.log(cardNumber);

    for (let i = 0; i < cardNumber.length; i++) {
      // iteramos para sumar
      let intNum = parseInt(cardNumber[i]); //declaamos intNum y le asignamos el valor de cardNumber[posicion]

      total += intNum; // le sumamos intNum a total
    }
    if (total % 10 === 0) {
      resultBolean = true;
    } else {
      resultBolean = false;
    }
    return resultBolean; // no estoy segura si aquí debería retornar esto
  },

  //aquí va la función maskify
  maskify: function maskify(numero) {
    let cardNumberGhost = numero.split(""); //.split
    let resultGhost;
    const array = [];

    for (let i = 0; i < cardNumberGhost.length; i++) {
      if (i >= 0 && i < cardNumberGhost.length - 4) {
        array.push("#"); //El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
      } else {
        array.push(cardNumberGhost[i]);
      }
    }
    resultGhost = array.join(""); // .join está colocando un espacio entre cada gatito
    console.log(resultGhost);
    return resultGhost;
  },
};

export default validator;
