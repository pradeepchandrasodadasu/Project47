class Game {
  constructor(){}

  //creates getState function
  getState(){
    //reads the value of gameState from database
    database.ref("gameState").on("value",function (data){
      gameState = data.val();

    });
  }

  //creates update function
  update(state){
    //update the gameState value in database
    database.ref("/").update({
      gameState : state
    });
  }

  //creates start function
  start(){
    //if gameState is equal to 0 -
    if(gameState === 0){ 
      //creates playerobject & call get count function of playerobject
      player = new Horse();
      player.getCount();

      //creates form object and call display function of form object
      form = new Form();
      form.display();

    }  

    //creates sprite objects and add animation to them
    horse1 = createSprite(player.x,player.y);
    horse1.addAnimation("running1",player.animation);
    horse2 = createSprite(player.x,player.y);
    horse2.addAnimation("running2",player.animation);
    //pushes the sprite objects into horses array
    horses = [horse1,horse2];
    
  }

  //creates play function
  play(){
    //calls hide function of form object
    form.hide();

    //writes the text of "You" for the current player 
    if(horses[player.index-1] === player.index){
      fill("green");
      textSize(17);
      text("You",horses[player.index-1].x,horses[player.index-1].y);
    }
    
    //if twoHorses is not equal to undefined -
    if(twoHorses !== undefined){
      //if right arrow pressed -
      if(keyDown(RIGHT_ARROW) && player.index !== null){
        //current player gets velocityX
        horses[player.index-1].x =+ 5;

        //gives the value of player.velocityX 
        player.x = horses[player.index].x;

        //call update function of player object
        player.update();

        }
    //draws sprite objects
    drawSprites();
    }
    
  }
}