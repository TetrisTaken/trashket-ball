
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var engine
var world
var ground
var w1,w2
function preload() {

}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(400,502,800,40)
 w1 = new Ground(550,435,20,100)
 w2 = new Ground(700,435,20,100)



	Engine.run(engine);

	var ball_options = {
		isStatic: false,
		restitution: 0,
		friction: 0,
		density: 1
	}
	ball = Matter.Bodies.circle(20, 500, 10, ball_options)
	World.add(world,ball)
	console.log(ball)
}


function draw() {
	rectMode(CENTER);
	background(0);
ellipse(ball.position.x,ball.position.y,20,20,20)
ground.display()
w1.display()
w2.display()

drawSprites();

}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:7.5,y:-0.6})
	}
}

