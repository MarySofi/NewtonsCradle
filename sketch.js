
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof,rope1,rope4
function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;
    rope1= new rope(bobObject1,roofObject.body,-bobDiameter*2,0)
    rope2= new rope(bobObject2,roofObject.body,-bobDiameter*2,0)
    rope3= new rope(bobObject3,roofObject.body,-bobDiameter*2,0)
    rope4= new rope(bobObejct4,roofObject.body,-bobDiameter*2,0)
    roof = new roof(400,400,100,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();

  
  drawSprites();
 
}



