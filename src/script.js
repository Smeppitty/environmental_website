var width = 0;

function move(ID) {
  var elem = document.getElementById(ID);
    if (width < 100) {
      if(ID == "Animalbar"){
        width+=277
        elem.style.width = width + '%';
        elem.innerHTML = width * 1 + 'Dead';
      }else if(ID == "Airbar"){
        //do other things
      }
    }
    if(width == 100){
      //pop up
    }
  
}