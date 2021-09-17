const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball,ball2, ball3, ball4, ball5;
//Create multiple bobs, mulitple ropes varibale here

rope1=new rope(bob1,roof,-80, 0);
rope2=new rope(bob1,roof, -80,0);
rope3=new rope(bob1,roof,-80, 0);
rope4=new rope(bob1,roof,-80, 0);
rope5=new rope(bob1,roof,-80, 0);

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS)

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		isStatic:true
	}

	var ball2_options={
		isStatic:true
	}

	var ball3_options={
		isStatic:true
	}

	var ball4_options={
		isStatic:true
	}

	var ball5_options={
		isStatic:true
	}

	roof = Bodies.rectangle(400,50,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(400,100,230,20,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(400,150,230,20,ball2_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(400,200,230,20,ball3_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(400,250,230,20,ball4_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(400,300,230,20,ball5_options);
	World.add(world,ball5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  


  rect(roof.position.x,roof.position.y,230,20);
  ellipse(ball.position.x,ball.position.y,20)
  ellipse(ball2.position.x,ball.position.y,20)

  ellipse(ball3.position.x,ball.position.y,20)

  ellipse(ball4.position.x,ball.position.y,20)
  ellipse(ball5.position.x,ball.position.y,20)


  //call display() to show ropes here

  display()
	{

		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
	}
  //create ellipse shape for multiple bobs here

  ellipseMode(RADIUS);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==RIGHT_ARROW){
	  Matter.bodyB.applyForce(ball,{x:0,y:0})
	}
}
