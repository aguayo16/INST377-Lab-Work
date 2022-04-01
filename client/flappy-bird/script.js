/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-const-assign */
/* eslint-disable prefer-template */
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const display = document.querySelector('.game-container');
  const ground = document.querySelector('.grund');

  let birdBottom = 100;
  let birdLeft = 220;
  let gravity = 2;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';
  }

  let timerId = setInterval(startGame, 20);

  function jump() {
    if (birdBottom <= 500) {
      birdBottom += 50;
      bird.style.bottom = birdBottom + 'px';
      console.log(birdBottom);
    }
  }

  function control(event) {
    if (event.keyCode === 32) {
      jump();
    }
  }

  document.addEventListener('keyup', control);

  function generateObstacle() {
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    let obstacleLeft = 500;
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    display.appendChild(obstacle);

    obstacle.style.bottom = obstacleBottom + 'px';
    obstacle.style.left = obstacleLeft + 'px';

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + 'px';

      if (obstacleLeft === -50) {
        clearInterval(obsTimer);
        // obstacle.classList.remove(obstacle);
        display.removeChild(obstacle);
      }
    }

    let obsTimer = setInterval(moveObstacle, 20);
  }

  generateObstacle();
});