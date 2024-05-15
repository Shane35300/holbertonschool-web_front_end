function countPrimeNumbers() {
	let total = 0;
	let detected;
	for ( let i = 2 ; i <= 100 ; i++) {
		detected = false;
		for (let x = 2 ; x < Math.sqrt(i) ; x++) {
			if (i % x === 0) {
				detected = true;
				break;
			}
		}
		if (detected === false) {
			total += 1;
		}
	}
	return total;
}
let start = performance.now();
for (let i = 0; i < 100 ; i++) {
	setTimeout(() => {
		countPrimeNumbers();
	});
}
setTimeout(() => {
	let end = performance.now();
	let time = end - start;
	console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`)
}, 0);
