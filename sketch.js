const Engine = Matter. Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg

function preload(){
backgroundImg = loadImage("images/snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for(var i = 0;i<20;i++){
    snow = new Snow(random(0,800),0,50,50)
  }
}

function draw() {
  background(backgroundImg) 


  Engine.update(engine);
  snow.display();
}