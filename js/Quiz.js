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
handleElements()
from.hide();
from.title.class("Result of the Quiz");


    //write code to change the background color here
    background("Yellow");
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    getContestantInfo( ) 

    //write condition to check if contestantInfor is not undefined
Contestant.getPlayereInfo()
    //write code to add a note here
if (allContestants !== undefined){
  var displlay_Answers ="2"
fill ("Blue")
textSize (20);
text ("*NOTE: Contestant who answered correct are highlighted in geeen color!",130,230)



}
    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns = "2";
if (correctAns === allContestants[plr].answer)
fill("Green")
else
fill("red");

displlay_Answers+=30
textsize(20)
text(allContestants[plr].name+ ":"+ allContestants[plr].answer,displlay_Answers)
    }
  }

}
