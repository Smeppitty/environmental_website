var Mclicks = 0;
var Dclicks = 0;
var width = 0;

function counter(divisor) {
  var clicks
  if(divisor == 365){
    Dclicks++;
    clicks = Dclicks
  }else if(divisor == 12){
    Mclicks++;
    clicks = Mclicks;
  }

	const counters = document.querySelectorAll('.counter');
	const speed = 200; // The lower the slower

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +Math.ceil(counter.getAttribute('max'));
			const subtargetDays = +Math.ceil(counter.getAttribute('max')/365);
      const subtargetMonths = +Math.ceil(counter.getAttribute('max')/12);
      const subtarget = +Math.ceil(counter.getAttribute('max')/divisor);
			const count = +Math.ceil(counter.innerText);

      const newNum = subtargetDays*Dclicks + subtargetMonths*Mclicks;
			// Lower inc to slow and higher to slow
			const inc = Math.ceil(subtarget / speed);


      if (count >= target) {
			  counter.innerText = target;
        const ratio = (Mclicks*30 + Dclicks)/360;
				setProgress(ratio);
			  //if total target was not reached, and if current value is not below daily value, then set current value to the daily value
			}else if (count < newNum) {
				// Add inc to count and output in counter
				counter.innerText = count + inc;
				// Call function every ms
				setTimeout(updateCount, 1);
			} else {
				counter.innerText = newNum;
				const ratio = (Mclicks*30 + Dclicks)/360;
				setProgress(ratio);
			}
		};
		updateCount();
	});
}

function setProgress(ratio) {
	var elem = document.getElementById('bar');
	  if (width < 100) {
		  width=(ratio*100).toFixed(2);
		  elem.style.width = width + '%';
		  elem.innerHTML = width + '%';
		}
  	}