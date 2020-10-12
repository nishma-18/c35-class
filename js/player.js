class Player{

constructor(){
}

getplayerCount(){

var playerCountreference= database.ref('playerCount');
playerCountreference.on("value", function(data){
    playerCount=data.val();
}
    )

}

updateplayerCount(count){
    database.ref('/').update({
        playerCount: count
    })
}

updateplayerName(name){
var playerIndex= "player"+playerCount;
database.ref(playerIndex).set({
    name: name
})
}

}