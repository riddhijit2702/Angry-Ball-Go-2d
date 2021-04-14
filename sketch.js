const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backImg,particle;
var block1,block2;
var score=0;

function preload(){
  backImg=loadImage("pngtree-red-game-flame-banner-background-image_259575.jpg")
  whoosh=loadSound("mixkit-fast-rocket-whoosh-1714.wav")
  retro=loadSound("mixkit-arcade-retro-game-over-213.wav")
  sweep=loadSound("mixkit-fast-small-sweep-transition-166.wav")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(displayWidth,displayHeight-140);
  
   
 

  baseDown=new Ground(400,displayWidth-800,200000,10);
  baseUp=new Ground(400,displayWidth-1700,200000,10);
  baseLeft=new Ground(0,33,10,2000000);
  baseRight=new Ground(displayWidth-10,displayWidth-1700,10,2000000);

  particle=new RedBall(200,200,80,80);

  ball1 = new Ball(200,200,100,100);
  ball2 = new Ball(200,200,100,120);
  rope= new Rope(ball1.body,{x:1220,y:105});
  rope2 = new Rope(ball2.body,{x:1000,y:115});

  block1= new Block(350,350,random(20,100),random(50,80));
  block2= new Block(400,300,random(20,100),random(50,80));
  block3= new Block(380,321,random(20,100),random(50,80));
  block4= new Block(random(300,400),350,random(20,100),random(50,80));
  block5= new Block(370,256,random(20,100),random(50,80));
  block6= new Block(410,273,random(20,100),random(50,80));
  block7= new Block(360,80,random(20,100),random(50,80)) ;
  block8= new Block(340,78,random(20,100),random(50,80));
  block9= new Block(352,88,random(20,100),random(50,80));
  block10= new Block(317,56,random(20,100),random(50,80));
  block11= new Block(123,50,random(20,100),random(50,80));
  block12= new Block(random(300,400),350,random(20,100),random(50,80));
  block13= new Block(481,40,random(20,100),random(50,80));
  block14= new Block(350,41,random(20,100),random(50,80));
  block15= new Block(340,80,random(20,100),random(50,80)) ;
  block16= new Block(408,47,random(20,100),random(50,80));

  barrier=new AnotherBlock(750,150,15,500);
barrier2=new AnotherBlock(80,240,400,20)  ;
barrier3=new AnotherBlock(0,10,400,20)  ;





  bBase1= new Ground(500,700,500,10);
 
}
function Win(){
  alert("You won! Congrats!");
}
function draw() {
 
 background("black"); 
  Engine.update(engine);

console.log(ball.particle.speed);
  
  
  if(particle.body.speed<500){
    score=score+20;
  }
  else if(particle.body.speed<700){
    score=score+50;
  }
  else if(particle.body.speed<1500){
    score=score+random(50,100);
  }
  else{
    score=score-500;
  }

  if(score<2000&&score>5000){
    textFont("Lucida");
    textSize(20);
    text("K.O. !! Awesome Hit!. Keep hitting hard!",90,320);
  }
  else if (score<50000&&score>100000){
    textFont("Cursive");
    textSize(20);
    text("#Invincible!",90,320);
  }

if(score==500000){
Win();
}


particle.display();

baseDown.display();
baseUp.display();
baseLeft.display();

rope.display();
rope2.display();
ball1.display();
ball2.display();


block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();


bBase1.display();
barrier.display();
barrier2.display();
barrier3.display();



  //drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);

textSize(25);
textFont("Cursive");
text("Score:-"+score,135,78);


}



function keyPressed() {
  var rand = Math.round(random(1, 3));
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(particle.body,particle.body.position,{x:0,y:-2});
   if(rand==1){
     whoosh.play() ;
   }
   else if(rand==2){
     retro.play();
   }
  else if(rand===3){
    sweep.play();
  }
  }
  else if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(particle.body,particle.body.position,{x:0,y:2})
    if(rand==2){
      whoosh.play() 
    }
    else if(rand==1){
      retro.play()
    }
   else if(rand===3){
     sweep.play()
   }
  }
  else if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(particle.body,particle.body.position,{x:-2,y:0})
    if(rand==1){
      whoosh.play(); 
    }
    else if(rand==2){
      retro.play();
    }
   else if(rand===3){
     sweep.play();
   }
   }
   else if(keyCode===RIGHT_ARROW){
     Matter.Body.applyForce(particle.body,particle.body.position,{x:2,y:0})
     if(rand==1){
      whoosh.play(); 
    }
    else if(rand==2){
      retro.play();
    }
   else if(rand===3){
     sweep.play();
   }
   }
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}
