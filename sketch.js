var balloonColor = ('#'+(Math.random()*0xFFFFFF<<0).toString(16));
var distanceToTop = 200
var randomX = 200
var points = 0
var speed = 0.1
var speedChanger = 0
function setup() {
  createCanvas(400, 400);
  bg = loadImage('skyImage.jpeg');
}


function draw() {
  background(bg);
  fill(balloonColor)
  ellipse(randomX, distanceToTop, 50, 60)
  fill('grey');
  rect(randomX - 1, distanceToTop + 30, 2, 80)
  if (distanceToTop < 0) {
    distanceToTop = 400;
    balloonColor = ('#'+(Math.random()*0xFFFFFF<<0).toString(16));
    points = points - 1;  
  }
  if (speedChanger == 5) {
    speed = speed + 0.1;
    speedChanger = 0;
  }
  textSize(16);
  text('score = ' + points, 10, 15);
}
(function moveBalloon() {
  setTimeout(() => {
    distanceToTop -= speed;
    moveBalloon();
  }, 1)
})()

function mouseClicked() {
  if (mouseX > randomX - 25 && mouseX < randomX + 25) {
    if (mouseY > distanceToTop - 30 && mouseY < distanceToTop + 30) {
      distanceToTop = 400;
      randomX = (Math.floor(Math.random() * 400));
      balloonColor = ('#'+(Math.random()*0xFFFFFF<<0).toString(16));
      points = points + 1;
      speedChanger = speedChanger + 1;
      console.log('Click!');
    }
  }
}
