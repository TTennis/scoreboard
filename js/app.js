'use strict';

class User() {

}

let user1 = {
  fieldName: document.querySelector('.scoreboard-names__name--1'),
  fieldScore: document.querySelector('.scoreboard-scores__score--1'),
  btn: document.querySelector('.scoreboard-buttons__btn--1'),
  dialogBtn: document.querySelector('.scoreboard-dialog__btn--1'),
};

let user2 = {
  fieldName: document.querySelector('.scoreboard-names__name--2'),
  fieldScore: document.querySelector('.scoreboard-scores__score--2'),
  btn: document.querySelector('.scoreboard-buttons__btn--2'),
  dialogBtn: document.querySelector('.scoreboard-dialog__btn--2'),
};

user1.name = prompt('Имя первого игрока', 'Игрок 1');
user2.name = prompt('Имя второго игрока', 'Игрок 2');

let balance = false;

changeName(user1.fieldName, user1.dialogBtn, user1.btn, user1.name);
changeName(user2.fieldName, user2.dialogBtn, user2.btn, user2.name);

startGame();

user1.btn.addEventListener('click', function () {
  addPoint(user1.fieldScore);
  changeGuard();
  validScore();
  validBalance();
});

user2.btn.addEventListener('click', function () {
  addPoint(user2.fieldScore);
  validScore();
  changeGuard();
  validBalance();
});

function addPoint(fieldScore) {
  ++fieldScore.value;
  fieldScore.toString();
}

function validBalance() {
  if (balance) {
    if (Math.abs(+user1.fieldScore.value - +user2.fieldScore.value) >= 2) {
      alert("Поздравляем, игра закончилась!");
    }
  }
}

function validScore() {
  if (+user1.fieldScore.value >= 11 ||
      +user2.fieldScore.value >= 11) {
    alert("Поздравляем, игра закончилась!");
  }
  if (+user1.fieldScore.value >= 10 &&
      +user2.fieldScore.value >= 10) {
    user1.fieldScore.value = +user1.fieldScore.value - 10;
    user2.fieldScore.value = +user2.fieldScore.value - 10;
    balance = true;
  }
}

function changeGuard() {
  if ((+user1.fieldScore.value + +user2.fieldScore.value) % 5 === 0) {
    (!user1.fieldName.classList.contains('submits')) ? alert(`Подаёт ${user1.name}`) :
                                                        alert(`Подаёт ${user2.name}`);

    user1.fieldName.classList.toggle('submits');
    user2.fieldName.classList.toggle('submits');
  }
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
      user1.fieldName.classList.add('submits');
    } else if (e.target.classList.contains('scoreboard-dialog__btn--2')) {
      user2.fieldName.classList.add('submits');
    }
    dialogWindow.classList.remove('scoreboard-dialog--show');
  });
}

// TODO подставлять имена в подсказки
// TODO более мобильное вид