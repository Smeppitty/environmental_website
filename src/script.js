function counter() {

	const counters = document.querySelectorAll('.counter');
	const speed = 200; // The lower the slower

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +Math.ceil(counter.getAttribute('max'));
			const subtarget = +Math.ceil(counter.getAttribute('max')/365);
			const count = +Math.ceil(counter.innerText);

			// Lower inc to slow and higher to slow
			const inc = Math.ceil(subtarget / speed);

			// Check if daily target is reached
			if (count < subtarget) {
				// Add inc to count and output in counter
				counter.innerText = count + inc;
				// Call function every ms
				setTimeout(updateCount, 1);
			//Check if total target (1 year's worth) is reached
			} else if (count >= target) {
				counter.innerText = target;
			//if total target was not reached, and if current value is not below daily value, then set current value to the daily value
			} else { 
				counter.innerText = subtarget;
			}
		};
		updateCount();
	});
}