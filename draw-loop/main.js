var maxi = 120;
var i = randomNumber(0, maxi);
var iy = 0;
var csize = randomNumber(0, 4);
var sdbi = []; //arrays
var sdbiy = [];
var sdbcs = [];
noStroke();
fill("#ffffff");
while (iy < 400) {
  while (i < 400) {
    sdbi.push(i);
    sdbiy.push(iy);
    sdbcs.push(csize);
    i = randomNumber(1, maxi) + i;
    csize = randomNumber(1, 4);
  }
  i = 0;
  iy = randomNumber(1, 10) + iy;
}
var sprite0 = createSprite(150, 350);
sprite0.setAnimation("spacebattleT");
sprite0.scale = 0.2;
sprite0.rotation = -90;
var sprite1 = createSprite(300, 200);
sprite1.setAnimation("spacebattleN");
sprite1.scale = 0.2;
sprite1.rotation = -90;


function draw() {
  background("#000016");
  i = 0;
  while (i < sdbi.length) {
    fill("#ffffff");
    noStroke();
    ellipse(sdbi[i], sdbiy[i], sdbcs[i], sdbcs[i]);
    i++;
  }
  drawSprites();
  textAlign(CENTER, CENTER);
  fill("#ffff00");
  textSize(22);
  stroke("#000000");
  strokeWeight(12);
  text("Trust the Process", 200, 50);
  textSize(8);
  text("JUST DO IT", 200, 75);
  sprite1.rotation = sprite1.rotation - 0.5;
  sprite0.x = randomNumber(147, 153);
  sprite0.rotation = randomNumber(-87, -93);
  sprite0.velocityY = sprite0.velocityY - 0.05;
}
