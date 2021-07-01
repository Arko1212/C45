
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5 
var bar;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bob1=new Bob(560,350,30)

	bob2=new Bob(500,350,30)

	bob3=new Bob(440,350,30)

	bob4=new Bob(380,350,30)

	bob5=new Bob(320,350,30)

	


	bar=new Bar(450,150,300,20)
	rope3=new Rope(bob3.body,bar.body,0,0)
	rope4=new Rope(bob4.body,bar.body,-60,0)
	rope5=new Rope(bob5.body,bar.body,-120,0)
	rope2=new Rope(bob2.body,bar.body,60,0)
	rope1=new Rope(bob1.body,bar.body,120,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 bob3.display()
 bob2.display()
 bob1.display()
 bob4.display()
 bob5.display()
 bar.display()
 rope3.display()
 rope4.display()
 rope5.display()
 rope2.display()
 rope1.display()
  drawSprites();
 
}
function keyPressed(){ if (keyCode === UP_ARROW)

{
	Matter.Body.applyForce(bob5.body,bob5.body.position,
	{x:-20,y:50});
	console.log("start")  } }


