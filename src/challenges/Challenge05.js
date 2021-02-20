const Challenge06 = () => {

  const removeSpaces = string => {
    return string.replace(/ /g, '');
  };

  const reverseString = string => {
    return string.split('').reverse().join('');
  };

  const isPalindromo = string => {
    const normalStr = removeSpaces(string);
    const reverseStr = reverseString(normalStr);

    if (normalStr === reverseStr) {
      console.log('Si es palindromo');
    } else {
      console.log('No es palindromo');
    }
  };

  isPalindromo('anita lava la tina');
};

export default Challenge06;