
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(700,600, 10);
    ground = new Ground(width/2,670,width,20);
    dustbin1 = new Dustbin(900,600, 20,120);
    dustbin2 = new Dustbin(1240,600,20,120);

    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
 
    
  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 10,y: -15})
    }
  }



