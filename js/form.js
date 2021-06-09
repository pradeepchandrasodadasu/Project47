class Form {
    constructor(){
       //create properties
       this.input = createInput("Name");
       this.title = createElement("h1");
       this.start = createButton("Start");
    }

    //creates display function
    display(){
       //gives text to this.title & sets it position
       this.title.html("Horse Race");
       this.title.position(windowWidth/2-50,0);

       //sets position of this.input
       this.input.position(width/2,height/2-50);

       //sets position of this.button
       this.start.position(width/2+120,height/2);

       this.start.mousePressed(()=>{
           //hides input,title and start
           this.input.hide();
           this.title.hide();
           this.start.hide();
           
           //increases playerCount
           playerCount += 1;

           //gives value to player.index
           player.index = playerCount;

           //calls updateCount of player class
           player.updateCount(playerCount);

           //gives value to player.name
           player.name = this.input.value();

           //calls update function of player class
           player.update();

       });
    }

    //creates hide function
    hide(){
        this.input.hide();
        this.title.hide();
        this.start.hide();
    }
}