var words=["python","java","javascript","ruby","html","cobol","swift","sql",
"database","server","computer","mouse","program","binary","desktop","hypertext",
"internet","angular","password","zip"]
var word="";
var score=0,timeLeft=30,timerId;
var elem = document.getElementById('timer');
var scr=document.getElementById('score');
function load(){
count()
var index=Math.floor(Math.random()*Math.floor(words.length));
word=words[index];
var length=word.length;
document.getElementById("textbox").maxLength=length;
var shuffled = word.split('').sort(function(){return 0.5-Math.random()}).join(',');
document.getElementById("word").innerHTML=shuffled;
}
function start(){
  score=0;
  scr.innerHTML="Score:"+score;
  document.querySelector(".background").style.display="block";
  load()
}
function check_me(){
  document.getElementById("wrong").style.display="none";
  var text_area=document.getElementById("textbox").value.toLowerCase();
  if(word==text_area){
    var x = new Audio("./assets/my_sound.wav")
    x.play(); 
    score+=10;
    clearInterval(timerId);
    scr.innerHTML="Score:"+score;
    document.getElementById("textbox").value = "";
    load();
  }
  else
  document.getElementById("wrong").style.display="block";
}
function count(){
  timeLeft=30;
timerId = setInterval(countdown, 1000);
}
function countdown() {
  if (timeLeft == 0) {
    var y = new Audio("./assets/game_over.wav")
    y.play();
   clearInterval(timerId);
   document.querySelector(".game").style.display="none";
   document.querySelector(".background").style.display="none";
   document.querySelector(".gameover-box").style.display="block";
   document.getElementById("showscore").innerHTML="Your score:"+score;
   console.log(score);
  } else {
    elem.innerHTML = timeLeft+" seconds remaining";
    timeLeft--;
  } 
}
function skip_one(){
  load();
  document.getElementById("skip").style.visibility="hidden";
}