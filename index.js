var numbtns = document.getElementsByClassName("buttonNum");
var calcScreen = document.getElementById("screen");

for (var i = 0; i < numbtns.length; i++) {
  numbtns[i].addEventListener("click", function() {
    calcScreen.innerHTML = "";
    calcScreen.innerHTML += this.innerHTML;
  })
}

function addition(num1, operator, num2) {

}
