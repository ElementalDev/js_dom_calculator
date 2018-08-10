var numbtns = document.getElementsByClassName("buttonNum"); //Gets all the elements that have the class buttonNum
var opbtns = document.getElementsByClassName("operator"); //Gets all the elements that have the class operator
var calcScreen = document.getElementById("screen"); //Gets the element with an id of screen
var equals = document.getElementById("equals"); //Gets the element with an id of equals
var clear = document.getElementById("clear"); //Gets element with ID clear
var num1 = "";
var num2 = "";
var operator = "";

//Records button clicks to store numbers
for (var i = 0; i < numbtns.length; i++) {
  numbtns[i].addEventListener("click", function() {//Assigns click listener to all nummber buttons
    calcScreen.innerHTML += this.innerHTML; //Add the number to the end of the string
    if (operator == "") {
      num1 += this.innerHTML; //Assigns the first set of numbers until an operator is assigned.
    }
    else {
      num2 += this.innerHTML; //Assigns the second set of numbers after an operator is assigned
    }
  });
}

//Records button clicks to store operator
for (var i = 0; i < opbtns.length; i++) {
  opbtns[i].addEventListener("click", function() { //Assigns click listener to all operator buttons
    calcScreen.innerHTML += this.innerHTML; //Add the operator to the end of the string
    operator = this.innerHTML; //Assign the operator clicked
  });
}

//Clear screen and reset variables when AC is clicked
clear.onclick = function() {
  calcScreen.innerHTML = "";
  num1 = "";
  num2 = "";
  operator = "";
}

equals.onclick = function() {
  switch (operator)
  {
    case "+":
      calcScreen.innerHTML = addition(parseFloat(num1), parseFloat(num2)); //Show the result of the calculation
      break;
    case "-":
      calcScreen.innerHTML = subtraction(parseFloat(num1), parseFloat(num2));
      break;
    case "*":
      calcScreen.innerHTML = multiplication(parseFloat(num1), parseFloat(num2));
      break;
    case "/":
      calcScreen.innerHTML = division(parseFloat(num1), parseFloat(num2));
      break;
  }
}
