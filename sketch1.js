var PLAY = 1;
var END = 0;
var gameState = PLAY;

var helicopter, helicopterImg;
var helicopter2, helicopter2Img;
var rocket, rocketImg,rocketGroup;
var bullet, bulletImg,bulletGroup;
var backgroundImg;
var reset;
var life1, life2, life3, life4, life5, life6, lige7, life8, life9, life10;
var life1I, life2I, life3I, life4I, life5I, life6I, lige7I, life8I, life9I, life10I;
var InvisLine;

function preload(){
    helicopterImg= loadImage('helicopter.png'); 
    helicopter2Img= loadImage('helicopter2.png');
    backgroundImg=loadImage('bg.jpg');
    life1I= loadImage('lives.png');
    life2I= loadImage('lives.png');
    life3I= loadImage('lives.png');
    life4I= loadImage('lives.png');
    life5I= loadImage('lives.png');
    life6I= loadImage('lives.png');
    life7I= loadImage('lives.png');
    life8I= loadImage('lives.png');
    life9I= loadImage('lives.png');
    life10I= loadImage('lives.png');
    rocketImg= loadImage('rocket.png')
    bulletImg= loadImage('bullet.png');
  }

  function setup() {
    createCanvas(displayWidth, displayHeight);

    helicopter=createSprite(170, 100, 50, 50);
    helicopter.addImage(helicopterImg);
    helicopter.scale = 0.5;
  
    helicopter2=createSprite(displayWidth-200, 100, 50, 50);
    helicopter2.addImage(helicopter2Img);
    helicopter2.scale = 0.5;
  
    life1=createSprite(120, 20, 10, 10);
    life1.addImage(life1I);
    life1.scale= 0.11;
  
    life2=createSprite(160, 20, 10, 10);
    life2.addImage(life2I);
    life2.scale= 0.11;
  
    life3=createSprite(200, 20, 10, 10);
    life3.addImage(life3I);
    life3.scale= 0.11;
  
    life4=createSprite(displayWidth-270, 20, 10, 10);
    life4.addImage(life4I);
    life4.scale= 0.11;
  
    life5=createSprite(displayWidth-235, 20, 10, 10);
    life5.addImage(life5I);
    life5.scale= 0.11;
  
    life6=createSprite(displayWidth-200, 20, 10, 10);
    life6.addImage(life5I);
    life6.scale= 0.11;
  
    life7=createSprite(displayWidth-160, 20, 10, 10);
    life7.addImage(life7I);
    life7.scale= 0.11;
  
    life8=createSprite(displayWidth-120, 20, 10, 10);
    life8.addImage(life8I);
    life8.scale= 0.11;
  
    life9=createSprite(240, 20, 10, 10);
    life9.addImage(life10I);
    life9.scale= 0.11;
  
    life10=createSprite(280, 20, 10, 10);
    life10.addImage(life10I);
    life10.scale= 0.11;
  
    InvisLine= createSprite(displayWidth/2, 50, displayWidth, 10);
    InvisLine.visible= false;
    
    rocketGroup = new Group();
    bulletGroup = new Group();

    
  }

  function draw(){
    background(backgroundImg);

    moveHelicopter();
    
    moveHelicopter2();

    if(keyWentDown('shift')){
        spawnBullets();
      }

      if(keyWentDown('space')){
        spawnRockets();
        }
        damageHeli();
        damageHeli2();
    drawSprites();
  }

  function spawnBullets(){
    bullet = createSprite(helicopter.x+100, helicopter.y+25);
    bullet.addImage(bulletImg);
    bullet.scale= 0.3;
    bullet.visible= true;
    bullet.velocityX= 20;
    bulletGroup.add(bullet);
  }

  
function spawnRockets(){
    rocket = createSprite(helicopter2.x-100, helicopter2.y+25);
    rocket.addImage(rocketImg);
    rocket.scale= 0.4;
    rocket.visible= true;
    rocket.velocityX= -20;
    rocketGroup.add(rocket);
  }

  function moveHelicopter(){
    if(helicopter.x<100 ){
        helicopter.x=100
    }
    if( helicopter.x>displayWidth-100){
      helicopter.x = displayWidth-100;
    }
    if(helicopter.y<100 ){
      helicopter.y=100
    }
    if( helicopter.y>displayHeight-100){
    helicopter.y = displayHeight-100;
    }
    
    if(keyDown(LEFT_ARROW)){
        helicopter.x =  helicopter.x-20;  
      }
      if(keyDown (RIGHT_ARROW)){
      helicopter.x= helicopter.x+20;
      }
      if(keyDown(DOWN_ARROW)){
      helicopter.y= helicopter.y+20;
      }
      if(keyDown (UP_ARROW)){
       helicopter.y= helicopter.y-20; 
      }
  }

  function moveHelicopter2(){
    if(helicopter2.x<100 ){
        helicopter2.x=100
    }
    if( helicopter2.x>displayWidth-100){
      helicopter2.x = displayWidth-100;
    }
    if(helicopter2.y<100 ){
      helicopter2.y=100
    }
    if( helicopter2.y>displayHeight-100){
    helicopter2.y = displayHeight-100;
    }
    
    if(keyDown('a')){
        helicopter2.x =  helicopter2.x-20; 
      }
      if(keyDown ('d')){
      helicopter2.x= helicopter2.x+20; 
      }
      if(keyDown('s')){
      helicopter2.y= helicopter2.y+20;
      }
      if(keyDown ('w')){
       helicopter2.y= helicopter2.y-20;
      }
  }

  function damageHeli(){
      if (rocketGroup.isTouching(helicopter)){
          helicopter.destroy();
          rocket.destroy();
      }
  }
  function damageHeli2(){
    if (bulletGroup.isTouching(helicopter2)){
        helicopter2.destroy();
        bullet.destroy();
    }
 }
