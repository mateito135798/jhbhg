class Game {
  constructor() {}
  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val();
    });
  }
  updateState(state){
    database.ref("/").update({
      gameState:state
    });
  }

  start() { 
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
    
    //crea coche 1
    car1 = createSprite(width/2-50,height - 100);
    car1.addImage("car1", car1Img);
    car1.scale = 0.1;
    //crea coche 2
    car2 = createSprite(width/2+100,height - 100);
    car2.addImage("car2" , car2Img);
    car2.scale = 0.1;
    cars=[car1,car2];
  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  
  }

  play(){
    this.handleElements();
    Player.getPlayerInfo();
    if(allPlayers !==undefined){
      image(trackImg ,0 ,-height*5, width,height*6);
      drawSprites();
    }
  }
}
//root  
  //|
  //->child
        //|
        //->child

    //root(papa)/child(hijo)/child(hijo del hijo)


