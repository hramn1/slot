'use strict';
(function () {
  let modelCube = {
    spin: 4000,
    //  данные вставлять в переменную UserId
    userId: [
      {
        name: "Иванов Иван",
        adress: "Россия, Москва",
        id: 545454
      }, {
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
    ],
    randomId: function(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return modelCube.userId[x];
    },
    winnerUser: function() {
       return this.randomId(0, this.userId.length - 1)
    },
    putUser: function() {
      for (let i = 0; i < viewCube.cubeUser.length; i++) {
        viewCube.cubeUser[i].innerText = this.randomId(0, this.userId.length - 1).id
      }
    },
    spinCube: function () {
      viewCube.cube.classList.add('rotate-x');
      let timerSpin = setInterval(function () {
        modelCube.spin = modelCube.spin - 5;
        if (modelCube.spin <= 500) {
          modelCube.spin = 500;
        }
        viewCube.cube.style.animationDuration = modelCube.spin + 'ms';
      }, 10);
      let timerUser = setInterval(function () {
        modelCube.putUser()
      }, 500);
      controllerCube.btnStop.onclick = stopCube;
      function stopCube() {
        clearTimeout(timerSpin);
        clearTimeout(timerUser);
        let timerStop = setInterval(function () {
          modelCube.spin = modelCube.spin + 5;
          if (modelCube.spin >= 4000) {
            viewCube.cube.classList.remove('rotate-x');
            clearTimeout(timerStop);
            viewCube.showWiner();
          }
          viewCube.cube.style.animationDuration = modelCube.spin + 'ms';
        }, 10)
      }
    },
  };
  let viewCube = {
    cube: document.querySelector('.cube'),
    cubeUser: document.querySelectorAll('.user-id'),
    winnerAdress: document.querySelector('.winner__adress'),
    winnerName: document.querySelector('.winner__name'),
    winId: document.querySelector('#winId'),
    showWiner: function () {
      let winner = modelCube.winnerUser();
      this.winId.textContent = winner.id;
      clearTimeout(showAdress);
      clearTimeout(showName);
      var showAdress = setTimeout( function () {
        viewCube.winnerAdress.textContent = winner.adress;
        viewCube.winnerAdress.classList.add('winner--show');
      },2000);
      var showName = setTimeout( function () {
        viewCube.winnerName.textContent = winner.name;
        viewCube.winnerName.classList.add('winner--show');
      },4000);
    }
  };
  let controllerCube = {
    btnStart: document.querySelector('.btn--spin'),
    btnStop:  document.querySelector('.btn--stop')
  };

  function init() {
    controllerCube.btnStart.onclick = modelCube.spinCube;
  }
init();

})();
