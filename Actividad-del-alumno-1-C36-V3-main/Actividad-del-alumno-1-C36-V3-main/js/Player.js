class Player {
  constructor() {
    this.name= null;
    this.index= null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on('value', data=>{
    playerCount = data.val();
    });
  }

  updateCount(count){
    database.ref("/").update({
    playerCount:count
    });
  }
  addPlayer(){
    //creamos jerarquia de jugadores 
    var playerIndex="players/player" + this.index;
    //se da posicion a los jugadores 
    if(this.index===1){ 
      this.positionX =width /2 - 100;

    }else{
      this.positionX=width/2 + 100 ;
    }
    //actualizando terrerno en la base de datos 
    database.ref(playerIndex).set({
      name:this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });

  }
  
 static getPlayerInfo(){
    var playerInfoRef=database.ref("players");
    playerInfoRef.on("value",data =>{
      allPlayers=data.val();
        
    });
  }






}
