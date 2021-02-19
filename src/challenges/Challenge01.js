const Challenge01 = () => {
  const values = [true, 5, false, "hello", "adios", 2];
  const numberValues = values.filter(value => typeof value === 'number');
  const stringValues = values.filter(value => typeof value === 'string');
  const booleanValues = values.filter(value => typeof value === 'boolean');

  const operationsAll = (numbers) => {
    console.log(numbers);

    const sum = numbers[0] + numbers[1];
    console.log(`suma: ${sum}`);

    const subtraction = numbers[0] - numbers[1];
    console.log(`resta: ${subtraction}`);

    const multiplication = numbers[0] * numbers[1];
    console.log(`multiplicación: ${multiplication}`);

    const division = numbers[0] / numbers[1];
    console.log(`división: ${division}`);
  };

  const operationsBoolean = (booleans) => {
    const trueReturn = typeof booleans[0] === typeof booleans[1];
    console.log(`Valor true: ${trueReturn}`);

    const falseReturn = booleans[0] === booleans[1];
    console.log(`Valor false: ${falseReturn}`);
  };

  const longString = (strings) => {
    strings
  };
  console.log()

  operationsAll(numberValues);
  operationsBoolean(booleanValues);
};

export default Challenge01;