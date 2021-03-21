
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;
function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1230,200,30);
	mango3=new mango(1000,110,30);
	mango4=new mango(950,220,30);
	mango5=new mango(1150,170,30);
	mango6=new mango(1050,180,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new stone(240,420,15);

	launcherObject = new SlingShot(stoneObj.body,{x:240, y:420});
	
	Engine.run(engine);

}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   launcherObject.fly();
}

function detectollision(a,b){
	mangoBodyPosition=b.body.position
	stoneBodyPosition=a.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	  if(distance<=a.r+b.r)
	  {
		  Matter.Body.setStatic(b.body,false);
	  }
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:240, y:420})
		launcherObject.attatch(stoneObj.body);
	}
}

function draw() {

  background(230);
  
  textSize(20);
  text("Press Space To Get A Second Chance To Play",100,50);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  groundObject.display();

  launcherObject.display();

  stoneObj.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
}

