const validator = {
  isValid: function(numero) {
    const cardNumber = Array.from(numero).reverse();
    console.log(cardNumber);

  }
};

export default validator;
