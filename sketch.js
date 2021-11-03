
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall


function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  //Ball
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  ball= Bodies.circle(100, 10, 20, ball_options);

  World.add(world,ball);

  //Ground

  var ground_options ={
    isStatic: true
  };

  ground = Bodies.rectangle(0,390, 400, 20, ground_options);

  World.add(world,ground);

  //Wall
  wall = Bodies.rectangle(200,390, 200, 20, ground_options);

  World.add(world,wall);
  
  var rock_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  rock = Bodies.circle(250,10,20,rock_options);
  
  World.add(world,rock);
}

function draw() 
{
  background(51);
 
  ellipse(ball.position.x,ball.position.y,20)

  ellipse(rock.position.x,rock.position.y,20)
  
  rect(ground.position.x,ground.position.y,400,20)
  
  rect(wall.position.x,wall.position.y,200,10)

  Engine.update(engine)

}
