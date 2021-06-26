const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myWorld, myEngine, ball, connection, ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10

function setup() {
  createCanvas(1500, 750);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground = new Ground(750,600,1250,10)
  box1 = new Box(900,500,90,90)
  box2 = new Box(900,450,90,90)
  box3 = new Box(900,400,90,90)
  box4 = new Box(900,350,90,90)
  box5 = new Box(900,300,90,90)
  box6 = new Box(1000,500,90,90)
  box7 = new Box(1000,450,90,90)
  box8 = new Box(1000,400,90,90)
  box9 = new Box(1000,350,90,90)
  box10 = new Box(1000,300,90,90)
  ball = new Ball(500,500,100)
  connection = new Connection(ball.ball,{x:600,y:100})
}

function draw() {
background("lightgreen")
  Engine.update(myEngine);
  ground.display()
  box1.display()
  fill("blue")
  box2.display()
  fill("green")
  box3.display()
  fill("red")
  box4.display()
  fill("pink")
  box5.display()
  fill("gray")
  box6.display()
  fill("black")
  box7.display()
  fill("white")
  box8.display()
  fill("yellow")
  box9.display()
  fill("brown")
  box10.display()
  fill("lightblue")
  ball.display()
  connection.display()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.ball,{x:mouseX,y:mouseY})
}