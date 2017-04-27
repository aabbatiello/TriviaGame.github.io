

function onSubmit() {
  var score=0;
  var questions=5;
  var answers= ["a","b","a","c","c"];


var q1 = document.forms["quiz"]["q1"].value;
var q2 = document.forms["quiz"]["q2"].value;
var q3 = document.forms["quiz"]["q3"].value;
var q4 = document.forms["quiz"]["q4"].value;
var q5 = document.forms["quiz"]["q5"].value;


for(var i =1; i <= questions; i++){
  if(eval("q" + i) === ""){
    alert("You missed question number " + i);
}
}

for(var i =1; i <= questions; i++){
  if(eval("q" + i) === answers[i - 1]){
    score++;
 }
}

var results = document.getElementById("results");
results.innerhtml="<h2> You scored " + results + " points out of " + questions+ "</h2>"
alert("You scored  "+ score  + " out of " + questions);
return false;
restart();
}


var count=15;

var counter=setInterval(timer, 1000); 

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     alert("Times up compadre, Game Over!");

   }

 document.getElementById("timer").innerHTML=count + " secs";
}
