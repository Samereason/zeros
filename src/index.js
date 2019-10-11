module.exports = function zeros(expression) {
  // your solution
};

const exp = '45!*63!*28!';

function divFive(int) {
	let result = 0;

	while (int % 5 === 0 ) {
		int = int / 5;
		result++;
	}

	return result;
}

function factZero (fact) {
	let x = 0;

	for (let i = 5; i <= fact; i+=5) {
		x+= divFive(i);
	}

	return x;
}

const arr = exp.split("*").map(item => factZero(+item.slice(0, -1)));

const result = arr.reduce((sum, current) => sum + current);

console.log(result);
