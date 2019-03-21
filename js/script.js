'use strict';
let btn = document.querySelector('.btn--spin');
let cube = document.querySelector('.cube');
let spin = 4000;
let btnStop = document.querySelector('.btn--stop');
let userId = ['id1','id66','id666','id45','id55'];
let winId = document.querySelector('#winId');
function randomId(min, max ) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return userId[x];
}

btn.onclick = function (evt) {
  cube.classList.add('rotate-x');
  cube.style.animationDuration = spin + 'ms';
  var timerId = setInterval(function() {
    spin = spin-200;
    if (spin<=0){
      spin = 40;
    }
    cube.style.animationDuration = spin + 'ms';
}, 500);
btnStop.onclick = function (evt) {
  cube.classList.remove('rotate-x');
  spin = 4000;
  clearTimeout(timerId);
  winId.innerHTML =  randomId(0 , userId.length-1);
}
}
