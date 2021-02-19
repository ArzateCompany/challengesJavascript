const Challenge02 = () => {
  var number1 = 5;
  var number2 = 8;

  if (number2 >= number1) {
    console.log("numero1 no es mayor que numero2");
  }

  if (Math.sign(number1) === 1 || 0) {
    console.log("numero2 es positivo");
  }
  if (Math.sign(number1) === -1 || -0 >= 0) {
    console.log("numero1 es negativo o distinto de cero");
  }
  if (number2 >= number1 + 1) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
  }
};

export default Challenge02;