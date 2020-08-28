class Form {
    constructor(){
      this.title = createElement("h2")
      this.input = createInput("Name")
      this.button = createButton("play")
      this.greeting = createElement("h3")
    }
hide() {
 this.input.hide()
 this.button.hide()
 this.greeting.hide() 
}
  display(){
this.title.html("car racing game")
this.title.position(windowWidth/4+5,20)



this.input.position(windowWidth/4+5,windowHeight/4+35);
this.button.position(windowWidth/2,windowHeight/2-50);
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount++;
    player.index = playerCount
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("hello " + player.name);
    this.greeting.position(windowWidth/4+5,windowHeight/4+35);
});
}

}