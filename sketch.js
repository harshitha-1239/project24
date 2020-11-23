
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var paper;

function setup() {
	createCanvas(1600, 900);
 
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	rect1=new Box(400,680,40,60)
	rect2=new Box(400,680,60,40)
	rect3=new Box(400,680,60,40)
    paper=new Paper(200,680,90/2)

	

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display()
  rect2.display()
  rect3.display()
  paper.display()
  
  drawSprites();
 
}



