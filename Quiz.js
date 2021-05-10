class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();

    //write code to change the background color here   
    background("yellow");
    fill(0);
    textSize(30);
    text("Result of the Game" , 340 , 150);

    //write code to show a heading for showing the result of Quiz
    Contestant.getPlayerInfo();

    //call getContestantInfo( ) here
    

    //write condition to check if contestantInfor is not undefined

    if(allContestants !== undefined){

      var display_answers = 230;
      fill("lightblue");
      textSize(20);
      text("Note: Contestents answered correct are highlighted in green colour" , 130 , 240);

      for(var plr in allContestants){

      var correct_answer = '2' ;

      if(correct_answer === allContestants[plr].answer){
        fill("green")
      }else{
        fill("red")
      }
    display_answers += 30 ;
    textSize(30);
    text(allContestants[plr].name + ":" + allContestants[plr].answer , 250 , display_answers);

      }

    }
  

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
