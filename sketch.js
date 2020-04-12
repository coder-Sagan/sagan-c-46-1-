const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var bow;
var arrow;
var backgroundImg;

function preload(){
backgroundImg= loadImage("images/download.jpg");
}

function setup() {
  createCanvas(1600,757);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,750,1600,14);
  arrow=new Arrow(235,345,200,100);
  bow = new Bow(arrow.body,{x:235,y:345});
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  ground.display();  
  bow.display();
  arrow.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  bow.fly();
 }
 function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(arrow.body,{x:200,y:50});
        bow.attach(arrow.body);
    }
}
