const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var gg,gg2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var bb1,bb2,bb3,bb4,bb5,bb6,bb7,bb8,bb9;
var poly1,polygonImg;
var sling;

function preload()
{
	polygonImg = loadImage("hxa.png")
}

function setup() {
	createCanvas(1600, 800);
	
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
    
	ground = new Ground(800,790,1600,30);
	gg = new Ground(700,600,400,20);
	gg2 = new Ground(1260,390,350,20);
	b1 = new Box(670,590,50,60);
	b2 = new Box(630,590,50,60);
	b3 = new Box(660,590,50,60);
	b4 = new Box(700,590,50,60);
	b5 = new Box(720,590,50,60);
  b6 = new Box(760,590,50,60);
  b7 = new Box(780,590,50,60);
  b8 = new Box(660,540,50,60);
  b9 = new Box(670,540,50,60);
  b10 = new Box(700,540,50,60);
  b11 = new Box(720,540,50,60);
  b12 = new Box(760,540,50,60);
  b13 = new Box(680,500,50,60);
  b14 = new Box(690,500,50,60);
  b15 = new Box(740,500,50,60);
  b16 = new Box(705,430,50,60);

  bb1 = new Box(1134,380,60,60);
  bb2 = new Box(1195,380,60,60);
  bb3 = new Box(1255,380,60,60);
  bb4 = new Box(1315,380,60,60);
  bb5 = new Box(1375,380,60,60);
  bb6 = new Box(1195,320,60,60);
  bb7 = new Box(1255,320,60,60);
  bb8 = new Box(1315,320,60,60);
  bb9 = new Box(1255,260,60,60);

  poly1 = Bodies.circle(150,400,30,{restitution: 0.8});
   World.add(world,poly1);

  sling = new Slingshot(this.poly1,{x: 200,y: 200});

}


function draw() {
  rectMode(CENTER);
  background("violet");

  Engine.update(engine);

  fill("brown");
  ground.display();
  gg.display();
  gg2.display();
  fill(210,0,14);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("#003295")
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill(244,224,4);
  b13.display();
  b14.display();
  b15.display();
  fill("white");
  b16.display();


  fill(0,170,138);
  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();
  fill("lightpink")
  bb6.display();
  bb7.display();
  bb8.display();
  fill(135,206,234);
  bb9.display();
  imageMode(CENTER);
  image(polygonImg,poly1.position.x,poly1.position.y,60,60);
  sling.display();
  drawSprites();

}

function mouseDragged(){
 
  Matter.Body.setPosition(this.poly1,{x:mouseX,y:mouseY});

}

function mouseReleased(){

sling.fly();

}
