var p1, p2, p3, p4;
var gameState = "blue";
function preload() {
  p1Img = loadImage("1.png");
  p2Img = loadImage("2.png");
  p3Img = loadImage("3.png");
  p4Img = loadImage("4.png");
}
function setup() {
  createCanvas(900, 400);
  p1 = createSprite(100, 200, 100, 100);
  p1.addImage("p1Img", p1Img);
  p1.scale = 0.4;
  p2 = createSprite(300, 200, 100, 100);
  p2.addImage("p2Img", p2Img);
  p2.scale = 0.4;
  p3 = createSprite(500, 200, 100, 100);
  p3.addImage("p3Img", p3Img);
  p3.scale = 0.4;
  p4 = createSprite(700, 200, 100, 100);
  p4.addImage("p4Img", p4Img);
  p4.scale = 0.4;
  p2.visible = false;
  p3.visible = false;
  p4.visible = false;
}
function draw() {
  background("white");
  drawSprites();
  text(World.mouseX + " , " + World.mouseY, World.mouseX, World.mouseY);
  textSize(20);
  fill("black");
  if (gameState === "blue") {
    text("I have 2$", 50, 350);
  }
  if (gameState === "pink") {
    text("I have 1$", 50, 350);
    text("I got 1$ + I Earned 3$", 200, 350);
  }

  if (gameState === "green") {
    text("I have 1$", 50, 350);
    text("I have 2$", 250, 350);
    text("I got 2$ + I Earned 6$ ", 400, 350);
  }
  if (gameState === "red") {
    text("I have 4$", 450, 350);
    text("I got 4$ + I Earned 9$ ", 600, 350);
  }
  if (mousePressedOver(p1)) {
    gameState = "pink";
    p2.visible = true;
  }

  if (mousePressedOver(p2) && p2.visible === true) {
    gameState = "green";
    p3.visible = true;
  }
  if (mousePressedOver(p3) && p3.visible === true) {
    gameState = "red";
    p4.visible = true;
  }
}
