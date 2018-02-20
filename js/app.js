'use strict';

let user1 = prompt('Имя первого игрока', 'Игрок 1');
let user2 = prompt('Имя второго игрока', 'Игрок 2');

let balance = false;

let fieldNameUser1 = document.querySelector('.scoreboard-names__name--1');
let fieldNameUser2 = document.querySelector('.scoreboard-names__name--2');

let fieldScoreUser1 = document.querySelector('.scoreboard-scores__score--1');
let fieldScoreUser2 = document.querySelector('.scoreboard-scores__score--2');

let btnUser1 = document.querySelector('.scoreboard-buttons__btn--1');
let btnUser2 = document.querySelector('.scoreboard-buttons__btn--2');

let dialogBtnUser1 = document.querySelector('.scoreboard-dialog__btn--1');
let dialogBtnUser2 = document.querySelector('.scoreboard-dialog__btn--2');

changeName(fieldNameUser1, dialogBtnUser1, btnUser1, user1);
changeName(fieldNameUser2, dialogBtnUser2, btnUser2, user2);

startGame();

btnUser1.addEventListener('click', function () {
  addPoint(fieldScoreUser1);
  changeGuard();
  validScore();
  validBalance();
});

btnUser2.addEventListener('click', function () {
  addPoint(fieldScoreUser2);
  validScore();
  changeGuard();
  validBalance();
});

function validBalance() {
  if (balance) {
    if (Math.abs(+fieldScoreUser1.value - +fieldScoreUser2.value) >= 2) {
      alert("Поздравляем, игра закончилась!");
    }
  }
}

function validScore() {
  if (+fieldScoreUser1.value >= 11 ||
      +fieldScoreUser2.value >= 11) {
    alert("Поздравляем, игра закончилась!");
  }
  if (+fieldScoreUser1.value >= 10 &&
      +fieldScoreUser2.value >= 10) {
    fieldScoreUser1.value = +fieldScoreUser1.value - 10;
    fieldScoreUser2.value = +fieldScoreUser2.value - 10;
    balance = true;
  }
}

function changeGuard() {
  if ((+fieldScoreUser1.value + +fieldScoreUser2.value) % 5 === 0) {
    (!fieldNameUser1.classList.contains('submits')) ? alert(`Подаёт ${user1}`) :
                                                      alert(`Подаёт ${user2}`);

    fieldNameUser1.classList.toggle('submits');
    fieldNameUser2.classList.toggle('submits');
  }
}

function addPoint(fieldScore) {
  ++fieldScore.value;
  fieldScore.toString();
}

function changeName(fieldName, dialogName, btnUser, user) {
  fieldName.textContent = user;
  dialogName.textContent = user;
  btnUser.textContent = 'Очко ' + user;
}

function startGame() {
  alert("Разыгрываем подачу!");
  let dialogWindow = document.querySelector('.scoreboard-dialog');
  dialogWindow.classList.add('scoreboard-dialog--show');
  dialogWindow.addEventListener('click', function (e) {
    if (e.target.classList.contains('scoreboard-dialog__btn--1')) {
      fieldNameUser1.classList.add('submits');
    } else if (e.target.classList.contains('scoreboard-dialog__btn--2')) {
      fieldNameUser2.classList.add('submits');
    }
    dialogWindow.classList.remove('scoreboard-dialog--show');
  });
}

// TODO подставлять имена в подсказки
// TODO более мобильное вид