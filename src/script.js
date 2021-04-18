var Awidth = 0;
var Owidth =0;

function moveAll(){
  move('Animalbar');
  move('Oilbar');
  move('Waterbar');
}

function move(ID) {
  var elem = document.getElementById(ID);
    if(ID == "Animalbar"){
      if (Awidth < 83) { //8,333 is to 100 as
        Awidth+= 2.77 //277 is to 3.324
        elem.style.width = Awidth + '%';
        elem.innerHTML = Math.round(Awidth*100);
      }
    }
    if(ID == "Oilbar"){
        if (Owidth <97){ //1,000,000 / 10k
          Owidth += 3.33333333 //33,3333 is to 3.333
          elem.style.width = Owidth + '%';
          elem.innerHTML = Math.round(Owidth);
        }
        // if(Owidth >=97){
        //   elem.innerHTML = '1 Million Barrels!';
        // }
     }
  
}