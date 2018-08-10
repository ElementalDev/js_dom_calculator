//Adds numbers
function addition(num1, num2) {
  return num1 + num2;
}

//Subtracts numbers
function subtraction(num1, num2) {
  return num1 - num2;
}

//Multiplies numbers
function multiplication(num1, num2) {
  return num1 * num2;
}

//Divides numbers
function division(num1, num2) {
  return num1 / num2;
}

module.exports {

  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication;
  division: division

}
