
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.update(engine);
	//Create the Bodies Here.
	paper= new Paper(100,100,50);
	dustbin1=new Dustbin(600,690,50,100);
	dustbin2=new Dustbiin(650,690,100,50);
	dustbin3=new Dustbin(750,690,50,100);

 

	Engine.run(engine);
	
  
}


function draw() {
  
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbiin3.display();
  keyPressed();
}

function keyPressed(){
 if (keyCode === UP_ARROW){

Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

 }
}


