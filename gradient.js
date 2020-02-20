

/*var First = document.getElementById("one").value;
var Second = document.getElementById("two").value;
var Third = document.getElementById("three").value;
var Fourth = document.getElementById("four").value;
var Fifth = document.getElementById("five").value;
var Sixth = document.getElementById("six").value="2nd Color";
function mine(){
   var dom = document.getElementById("maker");
   var print = dom.style.backgroundImage = "linear-gradient("
      +First + ", " + Second + ", " + Third + ", " + Fourth + ", " + Fifth + ", " + Sixth +")"; 
   
   alert(print)
}*/


   var change = document.getElementById("maker");
   var changeTo = document.getElementById("one");
   var changeTo2 = document.getElementById("two");
   var changeTo3 = document.getElementById("three");
   var changeTo4 = document.getElementById("four");
   var changeTo5 = document.getElementById("five");
   var changeTo6 = document.getElementById("six");
function newer(){
   change.innerHTML = 
      change.style.backgroundImage = "linear-gradient("+ changeTo.value + ", " + changeTo2.value + ", " + changeTo3.value + ", " + changeTo4.value + ", " + changeTo5.value + ", " + changeTo6.value+ ")";

}






