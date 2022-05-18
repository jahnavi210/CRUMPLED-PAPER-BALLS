const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var dust
var pap

function preload(){
//find the bug in the below code
	dustImg = loadImage("dustbin.png");
	papImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		//density:0.4
	}

	ball = Bodies.circle(260,100,100,ball_options);
	World.add(world,ball);
    

	dust = Bodies.rectangle(1185,570,200,200)
	World.add(world,dust)

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(RADIUS);
		//use image() command to add paper image to the ball
        image(dustImg,1085,470,200,200)
        image(papImg,ball.position.x,ball.position.y,100,100)
	// use image() command to add dustbin image in the canvas.
    
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:7,y:-1});
    
  	}
}
