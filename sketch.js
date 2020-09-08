const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var particle;
var turn=0;
var gameState=PLAY;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height,width,20);

  for (var k=0; k<=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j=40;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,75));
  }
  for (var j=15;j<=width-10;j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j=75;j<=width;j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j=50;j<=width-10;j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, 40, 50)
        text("500", 10,650)
        text("500", 90,650)
        text("500", 170,650)
        text("500", 250,650)
        text("100", 330,650)
        text("100", 410,650)
        text("100", 490,650)
        text("200", 570,650)
        text("200", 650,650)
        text("200", 730,650)

    if(particle===null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x300){
          score=score+500;
          particle=null;
          if(turn>=5) gameState="end";{
            text("GAME OVER", 400,500,20,50);
          }
        }
      }
    }

    if(particle===null){
      particle.display();
      if(particle.body.position.y>301 && particle.body.position.y>600){
        if(particle.body.position.x300){
          score=score+100;
          particle=null;
          if(turn>=5) gameState="end";
        }
      }
    }

    if(particle===null){
      particle.display();
      if(particle.body.position.y>601 && particle.body.position.y>900){
        if(particle.body.position.x300){
          score=score+200;
          particle=null;
          if(turn>=5) gameState="end";
        }
      }
    }

  for (var k=0; k<divisions.length; k++) {
    divisions[k].display();
  }

  for (var j=0;j<plinkos.length;j++) {
    plinkos[j].display();
  }

  if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
  }

  for (var i=0;i<particles.length;i++) {
    particles[i].display();
  }

  drawSprites();
}


function mousePressed(){
  if(gameState==="end"){
    count++;
    particle= new Particle(mouseX,10,10,10);
  }
}