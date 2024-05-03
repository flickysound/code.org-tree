playSound("Tomb-of-the-Mask-OST---Cristal-nocturne--AudioTrimmer.com-.mp3", true);
var cursor = createSprite(200, 200);
cursor.setAnimation("selectionFrame");
cursor.visible = false;

var selection = 2;

var player = createSprite(200, 100);
player.setAnimation("heli-red-left");
player.scale = 0.3;

var rock1 = createSprite(randomNumber(0,400), 0);
var rock2 = createSprite(500, 200);
rock1.setAnimation("rock_1");
rock1.velocityY = 4.5;
rock2.velocityY = 5;
rock2.setAnimation("rock_1");
rock1.scale = 0.4;
rock2.scale = 0.4;

var coin = createSprite(randomNumber(50,350), randomNumber(50,350));
coin.setAnimation("coin");
coin.scale = 0.2;
coin.rotationSpeed = 1;

var gameover = false;

var score = 0;
var isAlreadyHit = true;
var isAlreadyHit2 = true;

showMobileControls(true, true, true, true);

var skreen = 1;
var gameTitle = createSprite(200, 100);
gameTitle.setAnimation("gameWatermark");
gameTitle.scale = 1.5;
textFont("Courier New");

var keyup = false;

function draw() {
  if (skreen == 1) {
    hideGame();
    background("black");
    fill("yellow");
    stroke("white");
    textSize(30);
    text("press space to start", 0, 390);
    
    drawSprites();
    if (keyWentDown("space")) {
      //showGame();
      skreen = 2;
      cursor.visible = true;
    playSound("selectsfx.mp3", false);
    }
  }
  if (skreen == 2) {
    background("black");
    fill("yellow");
    stroke("white");
    textSize(30);
    text("select player", 0, 390);
    player.visible = true;
    player.y = 200;
    player.x = 200;
    player.setAnimation("heli-red-left");
    drawSprites();
    player.setAnimation("heli-blue-left");
    player.x = 100;
    drawSprites();
    player.setAnimation("heli-green-left");
    player.x = 300;
    drawSprites();
    if (keyWentUp("space")) {
      keyup = true;
    }
    if (keyWentDown("a") || keyWentDown("left") || keyWentDown("h")) {
      if (selection > 1) {
        selection  = selection - 1;
        playSound("selectsfx.mp3", false);
      }
    } else if ((keyWentDown("d")) || keyWentDown("right") || keyWentDown("l")) {
      if (selection < 3) {
        selection  = selection + 1;
        playSound("selectsfx.mp3", false);
      }
    } else if ((keyWentDown("space")) && keyup) {
      if (selection == 1) {
        player.x = 100;
    player.setAnimation("heli-blue-left");
  } else if (selection == 2) {
    player.x = 200;
    player.setAnimation("heli-red-left");
  } else if (selection == 3) {
     player.x = 300;
    player.setAnimation("heli-green-left");
  }
      playSound("selectsfx2.mp3", false);
      skreen = 3;
      showGame();
      cursor.visible = false;
      stopSound("Tomb-of-the-Mask-OST---Cristal-nocturne--AudioTrimmer.com-.mp3");
      playSound("selectsfx.mp3", false);
    playSound("groovytraps-tomb-of-the-mask-ost-scloudtomp3downloader.com.mp3", true);
    } else if ((selection == 1)) {
      cursor.x = 100;
    } else if ((selection == 2)) {
      cursor.x = 200;
    } else if ((selection == 3)) {
      cursor.x = 300;
      
    }
  }
  
  if (skreen == 3) {
    if (gameOver != true) {
      background("lightblue");
      player.velocityY = player.velocityY + 0.5;
      playerControls();
      resetDwayneJohnson();
      colisionDetector();
      drawSprites();
    }
    scoreBoard();
    gameOver();
  }
}
function gameOver() {
if (player.x < -100 || player.x > 500 || player.y < -100 || player.y > 500) {
  gameTitle.visible = true;
drawSprites();
}
if (player.x < -100 || player.x > 500 || player.y < -100 || player.y > 500 || gameover) {
    stopSound("groovytraps-tomb-of-the-mask-ost-scloudtomp3downloader.com.mp3");
    dieSound();
    gameover = true;
    background("black");
    gameTitle.visible = true;
    hideGame();
drawSprites();
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
    textSize(30);
    text("Score:", 150, 350);
    gameTitle.visible = true;
  if (score > 9) {
    text (score, 60 + 70 + 150, 350);
  } else if (score < 10) {
    text (score, 40 + 70 + 150, 350);
  }
  fill("yellow");
    stroke("white");
    textSize(30);
    text("press space to restart", 0, 390);
    if (keyDown("space")) {
      stopSound("Tomb-of-the-Mask-OST---Cristal-nocturne--AudioTrimmer.com-.mp3");
      playSound("selectsfx2.mp3", false);
      playSound("groovytraps-tomb-of-the-mask-ost-scloudtomp3downloader.com.mp3", false);
      gameover = false;
      score = 0;
      player.x = 200;
      player.y = 200;
      player.velocityX = 0;
      player.velocityY = 0;
      showGame();
    }
  }
}

function scoreBoard() {
  fill("black");
  textSize(20);
  text("Score:", 10, 30);
  if (score > 9) {
    text (score, 40 + 60, 30);
  } else if (score < 10) {
    text (score, 20 + 60, 30);
  }
}
function colisionDetector() {
  
  if (player.isTouching(rock1) && isAlreadyHit) {
    playSound("hitsfx.mp3", false);
    rock1.velocityX = player.velocityX;
    player.velocityX = 0;
    isAlreadyHit = false;
   
  }
  if (player.isTouching(rock2) && isAlreadyHit2) {
    playSound("hitsfx.mp3", false);
    rock2.velocityX = player.velocityX;
    player.velocityX = 0;
    isAlreadyHit2 = false;
   
  }if (!player.isTouching(rock1) && (player.getSpeed() < 2)) {
    isAlreadyHit = true;
  }if (!player.isTouching(rock2) && (player.getSpeed() < 2)) {
    isAlreadyHit2 = true;
  }
  player.collide(rock1);
  player.collide(rock2);
  
  if (player.isTouching(coin)) {
    coin.x = randomNumber(50,350);
    coin.y = randomNumber(50,350);
    score = score + 1;
    playSound("coinsfx.mp3", false);
  }
  }
function playerControls() {
  if (keyDown("w") || keyDown(UP_ARROW) || keyDown("k")) {
  player.velocityY = player.velocityY - 2;
}
  if (keyDown("s") || keyDown(DOWN_ARROW) || keyDown("j")) {
  player.velocityY = player.velocityY + 1;
}
  if (keyDown("a") || keyDown(LEFT_ARROW) || keyDown("h")) {
  player.velocityX = player.velocityX - 1;
  if (selection == 1) {
    player.setAnimation("heli-blue-left");
  } else if (selection == 2) {
    player.setAnimation("heli-red-left");
  } else if (selection == 3) {
    player.setAnimation("heli-green-left");
  }
}
  if (keyDown("d") || keyDown(RIGHT_ARROW) || keyDown("l")) {
  player.velocityX = player.velocityX + 1;
  if (selection == 1) {
    player.setAnimation("heli-blue-right");
  } else if (selection == 2) {
    player.setAnimation("heli-red-right");
  } else if (selection == 3) {
    player.setAnimation("heli-green-right");
  }
}
  if (keyWentDown("w") || keyWentDown("up")) {
    playSound("jumpsfx.mp3", false);
    
  }
}
function resetDwayneJohnson() {
  if (rock1.y > 400) {
    rock1.y = 0;
    rock1.x = randomNumber(0, 400);
  }
  if (rock2.y > 400) {
    rock2.y = 0;
    rock2.x = randomNumber(0, 400);
  }
  if (rock1.x > 400) {
    rock1.velocityX = 0 - rock1.velocityX;
  }
  if (rock2.y > 400) {
    rock2.velocityX = 0 - rock2.velocityX;
  }
  
  if (rock1.velocityX > 0) {
    rock1.velocityX = rock1.velocityX - 0.1;
  } 
  if (rock1.velocityX < 0) {
    rock1.velocityX = rock1.velocityX + 0.1;
  }
  if (rock2.velocityX > 0) {
    rock2.velocityX = rock2.velocityX - 0.1;
  } 
  if (rock2.velocityX < 0) {
    rock2.velocityX = rock2.velocityX + 0.1;
  }
}
function dieSound() {
  if (gameover != true) {
    playSound("diesfx.mp3", false);
    playSound("Tomb-of-the-Mask-OST---Cristal-nocturne--AudioTrimmer.com-.mp3", true);
  }
}
function hideGame() {
  player.visible = false;
  rock1.visible = false;
  rock2.visible = false;
  coin.visible = false;
  showMobileControls(true, true, true, false);
  
}
function showGame() {
  player.visible = true;
  rock1.visible = true;
  rock2.visible = true;
  coin.visible = true;
  gameTitle.visible = false;
  showMobileControls(true, true, false, false);
}
