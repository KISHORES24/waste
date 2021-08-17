
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

	var ball_options = {
		restitution: 0.95,
		frictionAir: 0.01
	  }

	  console.log(ball_options)

	ground = Bodies.rectangle(200,690,400,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine);

  ellipse(50,60,20);

 

  
	  //Create the Bodies Here.
  
  
	  Engine.run(engine);
	
  }
  
  
  
