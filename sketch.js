var sc,mn,hr
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0);  
  drawSprites();
  hr=hour();
  mn=minute();
  sc=second();
  angleMode(DEGREES);
scAngle=map(sc,0,60,0,360);
mnAngle=map(mn,0,60,0,360);
hrAngle=map(hr,0,12,0,360);
translate(200,200);
rotate(-90);
push()
rotate(scAngle);
 strokeWeight(7)
 stroke(255,0,0);
 line(0,0,100,0);
pop()
push()
rotate(mnAngle);
 strokeWeight(7)
 stroke(0,255,0);
 line(0,0,80,0);
pop()
push()
rotate(hrAngle);
 strokeWeight(7)
 stroke(0,0,255);
 line(0,0,50,0);
 pop()
 noFill()
 strokeWeight(7)
 stroke(255,0,0);
 arc(0,0,300,300,0,scAngle);

 stroke(0,255,0);
 arc(0,0,280,280,0,mnAngle);

 stroke(0,0,255);
 arc(0,0,260,260,0,hrAngle);
}
