const firebaseConfig = {
  apiKey: "AIzaSyCJdlc8017r6FkQwpFhCqOauw62t797_9w",
  authDomain: "fruit-catcher-5ad1e.firebaseapp.com",
  databaseURL: "https://fruit-catcher-5ad1e-default-rtdb.firebaseio.com",
  projectId: "fruit-catcher-5ad1e",
  storageBucket: "fruit-catcher-5ad1e.appspot.com",
  messagingSenderId: "993009870042",
  appId: "1:993009870042:web:c7dc6bd802df06940971e3"
};
// inicia Firebase
firebase.initializeApp(firebaseConfig);


var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();

  obstacleImage = loadImage("images/mushroom.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}