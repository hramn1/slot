'use strict';
let btn = document.querySelector('.btn--spin');
let cube = document.querySelector('.cube');
let spin = 4000;
let btnStop = document.querySelector('.btn--stop');
let divWinner = document.querySelector('.winner');
let userId = [
  {
    name: "Иванов Иван",
    adress: "Россия, Москва",
    id: 545454
  },{
    name: "Петров Иван",
    adress: "Украина, Киев",
    id: 444444
  },
  {
    name: "Игнатьев Денис",
    adress: "Украина, Киев",
    id: 333333
  },
  {
    name: "Сидоров Николай",
    adress: "Украина, Киев",
    id: 222222
  },
  {
    name: "Николаева Мария",
    adress: "Россия, Екатеринбург",
    id: 232323
  },
  {
    name: "Сидорова Светлана",
    adress: "Россия, Санкт-Петербург",
    id: 777777
  },
  {
    name: "Шарапова Майя",
    adress: "Украина, Харьков",
    id: 666666
  }
];
let winId = document.querySelector('#winId');
let cubeUser = document.querySelectorAll('.user-id');
let winnerAdress = document.querySelector('.winner__adress');
let winnerName = document.querySelector('.winner__name');
function randomId(min, max ) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return userId[x];
}
function putUser() {
  for(let i = 0; i < cubeUser.length; i++){
    cubeUser[i].innerText = randomId(0, userId.length - 1).id
  }
}
btn.onclick = function (evt) {
  cube.classList.add('rotate-x');
  cube.style.animationDuration = spin + 'ms';
  var timerId = setInterval(function() {
    spin = spin-200;
    putUser();
    if (spin<=0){
      spin = 40;
    }
    cube.style.animationDuration = spin + 'ms';
}, 500);
btn.onclick = null;
btnStop.onclick = function (evt) {
  clearTimeout(timerId);
  var timerId1 = setInterval(function () {
    spin = spin + 400;
    if (spin > 4000){
      cube.classList.remove('rotate-x');
      clearTimeout(timerId1);
      let winnerUser = randomId(0, userId.length - 1)
      winId.textContent  =  winnerUser.id;
      winnerAdress.textContent = winnerUser.adress;
      winnerName.textContent = winnerUser.name;
      divWinner.classList.add('winner--show')
      btnStop.onclick = null;
    }
    cube.style.animationDuration = spin + 'ms';
  },500)

}
}
