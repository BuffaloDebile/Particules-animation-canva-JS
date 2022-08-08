const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(x, y, directionX, directionY, color) {
    this.x = x;
    this.y = y;
    this.directionY = directionY;
    this.directionX = directionX;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    } else if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

const particle1 = new Particle(10, 10, 50, 55, 2, '#f1f1f1f');

let particlesArray;

function init() {
  particlesArray = [];
  const numberOfParticles = (canvas.height * canvas.height) / 7000;

  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * (innerWidth - 10 - 10 + 1) + 10;
    const y = Math.random() * (innerHeight - 10 - 10 + 1) + 10;

    const directionX = cleanDirection();
    const directionY = cleanDirection();
    particlesArray.push(new Particle(x, y, directionX, directionY, '#f1f1f1'));
  }
}
init();

function cleanDirection() {
  // 0 or 1
  const random = Math.trunc(Math.random() * 2);
  if (random) {
    // de 0.5 a 1.5 non included, non trunc
    return Math.random() * 1 + 0.5;
  } else {
    // de -0.5 a -1.5 non included, non trunc
    return Math.random() * -1 + -0.5;
  }
}


