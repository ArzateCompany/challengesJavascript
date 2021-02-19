const Challenge03 = () => {
  const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  const getRemainder = number => {
    const remainderOperator = 23
    return number % remainderOperator;
  };

  const getLetterDNI = number => {
    const positionLetter = getRemainder(number);

    if (number >= 99999999 || number === 0) {
      console.log('Numero proporcionado no es válido');
    } else {
      const letterDNI = letters.filter((letter, index) => positionLetter === index)
      console.log(letterDNI);
    };
  }

  getLetterDNI(78570903);

};

export default Challenge03;

