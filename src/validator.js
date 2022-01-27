const validator = {
  isValid: function(numero) {
    const cardNumber = Array.from(numero).reverse();
    console.log(cardNumber);

    for(let i=0; i<16; i++){
      let non =[i];
      if(non%2===1){
        let doubles = cardNumber[i] * 2;  
        if(doubles > 9){
          let numberAdd = doubles.toString().split("");
          numberAdd = parseInt(numberAdd[0])+ parseInt(numberAdd[1]);
          console.log(numberAdd);

        }
        
      }
      
    }

  }
};

export default validator;
