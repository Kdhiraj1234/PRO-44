var bg,bg2,form,system,code,security;
var score=0;
var access1 = "VARIABLE";
var access2 = "FUNCTION";
var access3 = "DATABASE";
var gameState = PLAY;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);

  
    textSize(20);
    fill("black");
    text("Score:"+score,490,20);
    
  
  if(score === 3){
    background(bg2);
    textSize(32);
    text("TREASURE FOUND",430,250);
    
  }

  clues();
  security.display();
  
  // Add code to display score in the middle of the screen


  // Add code to display the end screen


  drawSprites()
}