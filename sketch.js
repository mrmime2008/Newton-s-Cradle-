
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(400,380);
	ball2 = new Ball(425,380);
	ball3 = new Ball(375,380);
	ball4 = new Ball(350,380);
	ball5 = new Ball(450,380);

	roof1 = new Roof(400,250,400);

	rope1 = new Rope(ball1.body,roof1.body);
	rope2 = new Rope(ball2.body,roof1.body);
	rope3 = new Rope(ball3.body,roof1.body);
	rope4 = new Rope(ball4.body,roof1.body);
	rope5 = new Rope(ball5.body,roof1.body);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball4.body,ball4.body.position,{x: -50, y: -45});
	}
}