import Ball from '../classes/Ball.js';
import Player from '../classes/Player.js';


const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');
const ball = new Ball(320, 240, 10, 'white');
const player1 = new Player(10, 200, 5, 80, 'black');
const player2 = new Player(625, 200, 5, 80, 'black');

let score1 = 0, score2 = 0;

function displayScores() {
  context.font = '25px Arial';
  context.fillStyle = 'white';
  context.fillText(`Player 1: ${score1}`, 20, 30);
  context.fillText(`Player 2: ${score2}`, canvas.width - 140, 30);
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  ball.move(canvas, player1, player2);

  if (ball.x - ball.radius < 0) {
    score2++;
    ball.reset(canvas);
  }
  if (ball.x + ball.radius > canvas.width) {
    score1++;
    ball.reset(canvas);
  }

  ball.draw(context);
  player1.draw(context);
  player2.draw(context);
  displayScores();

  requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', e => {
  if (e.key === 'z') player1.move('up', canvas);
  if (e.key === 's') player1.move('down', canvas);
  if (e.key === 'ArrowUp') player2.move('up', canvas);
  if (e.key === 'ArrowDown') player2.move('down', canvas);
});

gameLoop();
