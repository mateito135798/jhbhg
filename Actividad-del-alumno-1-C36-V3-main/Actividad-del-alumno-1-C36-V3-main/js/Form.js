class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png", "Titulo del juego");
    this.greeting = createElement("h2"); //greeting saludo
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width/2-110, height / 2 - 80);
    this.playButton.position(width / 2 - 95, height / 2 - 20);
    this.greeting.position(width/2 - 625 , height / 2 - 200);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed(){
    //arrow ()=>{}
      this.playButton.mousePressed((/*parametros*/)=>{
      /* lista de lementos a modificar*/
      this.playButton.hide();
      this.input.hide();
      var message =  `Hola ${this.input.value()} 
      </br> espera a que otro jugardor se una a la partida, CON PACIENCIA...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      

      
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
  	this.handleMousePressed();
  }
}
