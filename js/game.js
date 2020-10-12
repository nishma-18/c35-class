class Game{

constructor(){
}

getgameState(){

//we are referencing the gameState node from the database
var gameStatereference= database.ref('gameState');
gameStatereference.on("value", function(data){
    gameState= data.val()
})

}

updategameState(state){

database.ref('/').update({
    gameState: state
});


}

startGame(){

if(gameState === 0){

p = new Player();
p.getplayerCount();
form= new Form();
form.display();

}

}

}