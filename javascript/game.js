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



var Wins=0;

var Loses=0;

var GameNotification="Game In Progress";

$(document).ready(function(){
$('#randomspot').html(RandomNumber);

$('#wincount').html(Wins);
$('#losecount').html(Loses);
$('#Notification').html(GameNotification);



var TotalScore=0;
  $(".CrystalButton1").on("click", function() {

    TotalScore += CrystalValue1;
    $('#totalspot').html(TotalScore);

    alert("New score: " + TotalScore);

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
    }});




  $(".CrystalButton2").on("click", function() {

    TotalScore += CrystalValue2;
    $('#totalspot').html(TotalScore);

     alert("New score: " + TotalScore);

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
    }});




  $(".CrystalButton3").on("click", function() {

    TotalScore += CrystalValue3;
    $('#totalspot').html(TotalScore);

     alert("New score: " + TotalScore);

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
    }});





  $(".CrystalButton4").on("click", function() {

    TotalScore += CrystalValue4;
    $('#totalspot').html(TotalScore);

     alert("New score: " + TotalScore);

if (TotalScore === RandomNumber) {
      $('#Notification').html("You Win!");
      Wins +=1;
      $('#wincount').html(Wins);
    }

    else if (TotalScore >= RandomNumber) {
      $('#Notification').html("You Lose");
      Loses +=1;
      $('#losecount').html(Loses);
    }});






});

 
