
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;

var down;
var up;

var boton1;

function setup(){
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

  boton1 = createImg("up.png");
  boton1.position(50,50);
  boton1.size(50,50);
  

}
