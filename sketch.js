const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var snow1,snow2,snow3,snow4,snow5;
var snow=[];
var bg;
var engine,world;
var boy ,boyImage
var ground;


function preload(){
  bg=loadImage("snow3.jpg")
  boyImage=loadImage("Capture.PNG")
}



function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world

  boy=createSprite(390,250)
  boy.addImage(boyImage)
  boy.scale=0.7

  ground=createSprite(390,380,100,20)
  ground.visible=false;
  

 

}

function draw() {
  background(bg); 
  Engine.update(engine) 



  if(frameCount%10===0){
    

    snow.push(new Snow(random(10,790),random(0,400)))
    
  }

  if(keyCode===32 && boy.y>220){
    boy.velocityY=-6

  }
  boy.velocityY=boy.velocityY+0.5
  boy.collide(ground)

 


for(i=0;i<snow.length;i++){
  snow[i].display();
}
  drawSprites();
}