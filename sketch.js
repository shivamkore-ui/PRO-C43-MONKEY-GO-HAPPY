var backImage,backgr;
var player, player_running;
var ground,ground_img;

var banana, bananaImage;
var obstacles, obstaclesImage;
var bananaGroup, obstaclesGroup;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png")
  obstaclesImage = loadImage("stone.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.2;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  if(keyDown("space")&& player.y >= 100) {
    player.velocityY = -18;
  }
    
  player.velocityY = player.velocityY + 1.0;
  player.collide(ground);
    
    spawnFood();
    spawnObstacles();

}
  
 

  drawSprites();
}

function spawnFood(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -4;

    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 150 === 0){
    var obstacles = createSprite(600,750,40,10);
    obstacles.y = random(320,330);
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.5;
    obstacles.velocityX = -4;

    obstacles.lifetime = 300;
    player.depth = obstacles.depth + 1;
    obstaclesGroup.add(obstacles);
  }
}
