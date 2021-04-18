var clicks = 0

function counter(daysInYear) {

	const counters = document.querySelectorAll('.counter');
	const speed = 200; // The lower the slower
  	clicks++;  

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +Math.ceil(counter.getAttribute('max'));
			const subtarget = +Math.ceil(counter.getAttribute('max')/daysInYear);
			const count = +Math.ceil(counter.innerText);

			// Lower inc to slow and higher to slow
			const inc = Math.ceil(subtarget / speed);

      if (count >= target) {
			counter.innerText = target;
			//if total target was not reached, and if current value is not below daily value, then set current value to the daily value
			}else if (count < subtarget*clicks) {
				// Add inc to count and output in counter
				counter.innerText = count + inc;
				// Call function every ms
				setTimeout(updateCount, 1);
			} else { 
				counter.innerText = subtarget*clicks;
			}
		};
		updateCount();
	});
}