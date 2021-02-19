const Challenge04 = () => {
	const isPar = number => {
		if (number % 2 === 0) {
			console.log(`El numero ${number} es par`);
		} else {
			console.log(`El numero ${number} es impar`);
		}
	};

	isPar(23);
};

export default Challenge04