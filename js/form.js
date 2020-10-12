class Form {

    constructor(){
    }

    display(){

var title= createElement('h2');
title.html("welcome to the car racing game!");
title.position(130,20);
var input= createInput("player name");
input.position(130,160);
var button= createButton("play")
button.position(250,200);
var greeting= createElement("h3");

button.mousePressed(function(){
    input.hide();
    button.hide();
    var name= input.value();
    playerCount+= 1;
    p.updateplayerName(name);
    p.updateplayerCount(playerCount);
    greeting.html("welcome "+name);
    greeting.position(130,160);
});

    }

}