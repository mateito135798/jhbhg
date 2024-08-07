var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1Img,car2Img;
var trackImg;
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  trackImg = loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth , windowHeight);
  database = firebase.database();
  game = new Game();// clase de new game 
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
