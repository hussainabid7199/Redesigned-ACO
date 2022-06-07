// var button = document.getElementById("tile-btn").length;

// for(i=0; i<=button; i++){
//     document.querySelectorAll("#tile-btn")[i].addEventListener("click").style.color = "red";
// }
 
 



// document.querySelectorAll(".tile-inner-element").addEventListener("click").style.backgroundColor = "red";

var element = document.getElementById("tile-btn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("tile-btn").style.color = "red";
}