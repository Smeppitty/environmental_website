var width = 0;

function move() {
  var elem = document.getElementById("bar");
    if (width < 100) {
      width+=10;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }  
}