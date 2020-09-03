let cvs = document.getElementById("conteiner");
let ctx = cvs.getContext("2d");

let cosmo = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

cosmo.src = "img/astronaut.png";
bg.src = "img/001.png";
fg.src = "img/down.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

// Звуковые файлы
let fly = new Audio();
let score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

let gap = 90;

// При нажатии на кнопку
document.addEventListener("click", moveUp);

function moveUp() {
  yPos -= 25;
  fly.play();
  moneys = moneys + plusMoneys;
  document.getElementById('money').innerHTML = ('Ваши деньги:' + ' ' + moneys + '<br/>');

}

// Создание блоков
let pipe = [];

pipe[0] = {
  x: cvs.width,
  y: 0
}

let score = 0;

// Позиция Космоната
let xPos = 10;
let yPos = 150;
let grav = 1.5;

function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
      });
    }

    // Отслеживание прикосновений
    if (xPos + cosmo.width >= pipe[i].x
      && xPos <= pipe[i].x + pipeUp.width
      && (yPos <= pipe[i].y + pipeUp.height
        || yPos + cosmo.height >= pipe[i].y + pipeUp.height + gap) || yPos + cosmo.height >= cvs.height - fg.height) {
      location.reload(); // Перезагрузка страницы
    }

    if (pipe[i].x == 5) {
      score++;
      score_audio.play();
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(cosmo, xPos, yPos);

  yPos += grav;

  ctx.fillStyle = "red";
  ctx.font = "30px Comic Sans MS";
  ctx.fillText("Счет: " + score, 10, cvs.height - 20);

  requestAnimationFrame(draw);
}

pipeBottom.onload = draw;

//Instruction menu-

let rada = document.querySelector(".press")
var verhovna = document.querySelector(".js-menu")

rada.addEventListener("click", kiev)

function kiev() {
  verhovna.classList.toggle("openWin")
}

let OpenOrLock = 0;
let moneySecond = 0;
let moneys = 0;
let plusMoneys = 1;
let level = 0;
let levelup_cena = 50;


function Working() {
  moneys = moneys + plusMoneys;
  document.getElementById('money').innerHTML = ('Ваши деньги:' + ' ' + moneys + '<br/>');
}
function LevelUp() {
  if (moneys >= levelup_cena--) {
    moneys = moneys - levelup_cena;
    levelup = levelup + 1;
    levelup_cena + 1;
    plusMoneys++;
    levelup_cena = levelup_cena * 2;
    level++;
    document.getElementById('money').innerHTML = ('Ваши деньги:' + ' ' + moneys + '<br/>');
    document.getElementById('level').innerHTML = ('Ваш уровень:' + ' ' + level + '<br/>');
    document.getElementById('levelup').innerHTML = ('<strong>' + 'Купить lvl:' + ' ' + levelup_cena + '$' + '</strong>');
  }
}
function Money_Second() {
  moneys = moneys + moneySecond;
  document.getElementById('money').innerHTML = ('Ваши деньги:' + ' ' + moneys + '<br/>');
}
function moneySecondUp() {
  moneySecond = 1;
  let interval = setInterval("Money_Second()", 1000);
}