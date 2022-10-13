
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2, ground3;
var ball;
var ground
var garbage
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

var ball_options={
isStatic:false,
restitution:0.5,
friction:0,
density:1.5

}	
	//Create the Bodies Here.
	ball= Bodies.circle(250,300,radius/2, ball_options);
	World.add(world, ball);

	ground1= new ground(width/2, 670,width, 20)
	ground2= new ground(1100, 600,20, 120)
	ground3= new ground(1350, 600,20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 10);
	ground1.display();
	ground2.display();
	ground3.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


