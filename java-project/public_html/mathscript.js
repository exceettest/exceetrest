/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var begannt = false;
var answer = 0;
var score = 0;
function start()
{
    if (begannt === true)
    {
        window.location.reload();
    } else
    {
        begannt=true;
        machfrage();
        timer();
    }
}
function machfrage()
{
    var int1 = Math.round(Math.random() * 10);
    var int2 = Math.round(Math.random() * 10);
    document.getElementById("question").innerHTML = int1 + ' * ' + int2;
    answer = int1 * int2;
    fill();
}
function fill()
{
    var boxes = document.getElementsByClassName("sugg");
    for (var i = 0; i < boxes.length; i++) {
        (boxes[i]).innerHTML = Math.round(Math.random() * 100);
        (boxes[i]).onclick=function() {
    document.getElementById("none").style.display="block";
    document.getElementById("none").style.background="red";
    document.getElementById("none").innerHTML="Wrong";
};
    }
    var iu=Math.round( getRandomArbitrary(0, 4));
    if(iu===4)
        iu=--iu;
    boxes[iu].innerHTML = answer;
    boxes[iu].onclick=function(){
        document.getElementById("none").style.display="block";
    document.getElementById("none").style.background="green";
    document.getElementById("none").innerHTML="Correct";
    score+=1;
    document.getElementById("scoo").innerHTML=score;
    machfrage();
    };
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var time;
var rest=60;
function timer()
{
    document.getElementById("foot2").style.display="block";
    time= window.setInterval(changeint,1000);
}
function changeint(){
    if (rest>0) {
    document.getElementById("sec").innerHTML=--rest;
    }
    else
    {
        document.getElementById("Game").style.display='block';
        document.getElementById("gamescore").innerHTML=score;
    }
}
function falsch()
{
    document.getElementsByClassName("seclct").id+="none2";
    document.getElementById("none").style.display="block";
}
function richtig(){
    
}