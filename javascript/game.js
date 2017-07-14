var RandomNumber = Math.floor((Math.random() * 120) + 19);
console.log(RandomNumber);

var CrystalValue1= Math.floor((Math.random() * 12) + 1);
console.log(CrystalValue1);

var CrystalValue2= Math.floor((Math.random() * 12) + 1);
console.log(CrystalValue2);

var CrystalValue3= Math.floor((Math.random() * 12) + 1);
console.log(CrystalValue3);

var CrystalValue4= Math.floor((Math.random() * 12) + 1);
console.log(CrystalValue4);

var ScoreArray =[];

var TotalScore=0;

var Wins=0;

var Loses=0;

var GameNotification="Game In Progress";

$(document).ready(function(){
$('#randomspot').html(RandomNumber);
$('#totalspot').html("0");
$('#wincount').html(Wins);
$('#losecount').html(Loses);
$('#Notification').html(GameNotification);




  $(".CrystalButton1").on("click", function() {

    $('#Notification').html(GameNotification);
    $('#randomspot').html(RandomNumber);
    TotalScore += CrystalValue1;
    $('#totalspot').html(TotalScore);

    

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
      $('#totalspot').html("0");
      restartgame();
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
      $('#totalspot').html("0");
      restartgame();
    }});




  $(".CrystalButton2").on("click", function() {

    $('#Notification').html(GameNotification);
    $('#randomspot').html(RandomNumber);

    TotalScore += CrystalValue2;
    $('#totalspot').html(TotalScore);

     

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
      $('#totalspot').html("0");
      restartgame();
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
      $('#totalspot').html("0");
      restartgame();
    }});





  $(".CrystalButton3").on("click", function() {

    $('#Notification').html(GameNotification);
    $('#randomspot').html(RandomNumber);

    TotalScore += CrystalValue3;
    $('#totalspot').html(TotalScore);

    

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
      $('#totalspot').html("0");
      restartgame();
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
      $('#totalspot').html("0");
      restartgame();
    }});





  $(".CrystalButton4").on("click", function() {

    $('#Notification').html(GameNotification);
    $('#randomspot').html(RandomNumber);

    TotalScore += CrystalValue4;
    $('#totalspot').html(TotalScore);

     

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
      $('#totalspot').html("0");
      restartgame();
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
      $('#totalspot').html("0");
      restartgame();
    }});






  function restartgame(){
    RandomNumber = Math.floor((Math.random() * 120) + 19);
    $('#randomspot').html(RandomNumber);
    CrystalValue1= Math.floor((Math.random() * 12) + 1);
    CrystalValue2= Math.floor((Math.random() * 12) + 1);
    CrystalValue3= Math.floor((Math.random() * 12) + 1);
    CrystalValue4= Math.floor((Math.random() * 12) + 1);
    TotalScore=0;
    GameNotification="Game In Progress"; }});
    

  




  
    
 