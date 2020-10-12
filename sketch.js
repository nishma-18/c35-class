var database;
var gameState= 0;
var playerCount, form, p, game;


function setup(){
  database = firebase.database();
  
  createCanvas(1000,1000);
  game= new Game();
  game.getgameState();
  game.startGame();


  
}

function draw(){
  
}
