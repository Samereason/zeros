module.exports = function zeros(expression) {
  // your solution

	function divFive(int) {
		let result = 0;

		while (int % 5 === 0 ) {
			int = int / 5;
			result++;
		}

		return result;
	}

	function factZero (fact, start, step) {
		let x = 0;

		for (let i = start; i <= fact; i+=step) {
			x+= divFive(i);
		}

		return x;
	}

	const arr = expression.split("*").map(item => {
		const fact = parseInt(item);
		const factType = (item.match(/\!/g)||[]).length

		if (factType > 1) {
			return (fact % 2 === 0) ? factZero(fact, 2, 2) : factZero(fact, 1, 2)
		} else {
			return factZero(fact, 5, 5);
		}
	});

	 return arr.reduce((sum, current) => sum + current);
};

