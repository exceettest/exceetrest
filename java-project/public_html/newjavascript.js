/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//document.getElementById("b1").onclick=function(){
//               alert("aa");
//           };
//change html content
//           document.getElementById("button1").onclick=function(){
//               document.getElementById("facebook").innerHTML="<p>hell</p>";
//           };
//           document.getElementById("facechane").onclick=function(){      
//           document.getElementById("facebook").style.backgroundColor="red";
//           document.getElementById("facebook").style.width="200px";
//           };

//**********************

//variables
//var x=3;
//window.console.log(x);
//greeting="hallo";
//firstname='stev';
//alert(greeting == 'hello');
//var myarray=[1,2,5];
//alert(myarray)

//*************************
//change html using variable
//var color="red";
//document.getElementById("button1").onclick=function(){
//    var x=Math.round(Math.random()*256);
//y=Math.round(Math.random()*256);
//z=Math.round(Math.random()*256);
//  document.getElementById("facebook").style.backgroundColor='rgb('+x+','+y+','+z+')';
//};
//
//************************

/*function*/
//function greeting(x){
//    alert(x);
//}
//function swap(x,y){
//    var id1= document.getElementById(x);
//    var id2= document.getElementById(y);
//    
//    document.getElementById(x).innerHTML=id2.innerHTML;
//    document.getElementById(y).innerHTML=id1.innerHTML;
//    
//}
//document.getElementById("button1").onclick=function(){
//    greeting("fuck of");
//};

//****************************

//objects
//function aaphone(marke,model,warranty,color){
//    this.firma=marke;
//    this.model=model;
//    this.warranty=warranty;
//    this.color=color;
//    this.extentwarranty = function(x){
//        this.warranty+=x;
//    };
//};
//var aamyphone=new aaphone ("smasung","s8",12,"balckq");
//aamyphone.condition="new";
//window.console.log(aamyphone);
//aamyphone.extentwarranty(10);
//window.console.log(aamyphone);
//var aaphone=new aaphone ("smasung","s7 edge",24,"red");
//window.console.log(aaphone);

//*********************************

/*Arrays*/
//var ar = ["brot", "Ei", "milch"];
//document.getElementById("arraycon").innerHTML = ar;
//ar.splice(1, 1, "banana", "wisky");
//document.getElementById("arraycon").innerHTML = ar;

//****************************
//document.getElementById("ckeck").onclick=function(){ checkspeed(document.getElementById("Speed").value);};
//function checkspeed(s) {
//    var divv=document.getElementById("ddd");
//    window.console.log(divv);
//    window.console.log(s);
//    if (s > 100) {
//        divv.innerHTML+=('<p>Bekommen Sie eine Strafe</p>');
//    } else if (s <= 30) {
//        divv.innerHTML+=('<p>Sind Sie Schildkröte</p>');
//    } else {
//        divv.innerHTML+=('<p>Sie sind gut/e Fahrer/in</p>');
//    }
//}

var str ="tlantaa";
var pat=/A/i;
window.alert(pat.test(str));
















