describe("This is testing my basic DOM calculator", function() {

  var calculator = require("../lib/testFunctions.js");

  //Addition
  it("should add 2 numbers", function() {
    expect(calculator.addition(3, 2)).toEqual(5);
    expect(calculator.addition(6, 3)).toEqual(9);
    expect(calculator.addition(1, 3)).toEqual(4);
  })

  it("should add negative numbers", function() {
    expect(calculator.addition(-1, 2)).toEqual(1);
    expect(calculator.addition(-2, -9)).toEqual(-11);
    expect(calculator.addition(-1, 3)).toEqual(2);
  })

  it("should add decimal numbers", function() {
    expect(calculator.addition(0.5, 2)).toEqual(2.5);
    expect(calculator.addition(0.6, 0.4)).toEqual(1);
    expect(calculator.addition(1.44, 2.4)).toEqual(3.84);
  })

  //Subtraction
  it("should subtract 2 numbers", function() {
    expect(calculator.subtraction(3, 2)).toEqual(1);
    expect(calculator.subtraction(6, 3)).toEqual(3);
    expect(calculator.subtraction(1, 3)).toEqual(-2);
  })

  it("should subtract negative numbers", function() {
    expect(calculator.subtraction(-1, 2)).toEqual(-3);
    expect(calculator.subtraction(-2, -9)).toEqual(7);
    expect(calculator.subtraction(-1, 3)).toEqual(-4);
  })

  it("should subtract decimal numbers", function() {
    expect(calculator.subtraction(1.5, 0.5)).toEqual(1);
    expect(calculator.subtraction(1, 0.4)).toEqual(0.6);
    expect(calculator.subtraction(6.25, 3.25)).toEqual(3);
  })

  //Multiplication
  it("should mutiply 2 numbers", function() {
    expect(calculator.multiplication(3, 2)).toEqual(6);
    expect(calculator.multiplication(6, 3)).toEqual(18);
    expect(calculator.multiplication(1, 0)).toEqual(0);
  })

  it("should mutiply negative numbers", function() {
    expect(calculator.multiplication(-1, 2)).toEqual(-2);
    expect(calculator.multiplication(-2, -9)).toEqual(18);
    expect(calculator.multiplication(-1, 3)).toEqual(-3);
  })

  it("should mutiply decimal numbers", function() {
    expect(calculator.multiplication(1.5, 0.5)).toEqual(0.75);
    expect(calculator.multiplication(1, 0.4)).toEqual(0.4);
    expect(calculator.multiplication(6.25, 3.25)).toEqual(20.3125);
  })

  //division
  it("should divide 2 numbers", function() {
    expect(calculator.division(6, 2)).toEqual(3);
    expect(calculator.division(15, 3)).toEqual(5);
    expect(calculator.division(200, 100)).toEqual(2);
  })

  it("should divide negative numbers", function() {
    expect(calculator.division(-1, 2)).toEqual(-0.5);
    expect(calculator.division(-10, -2)).toEqual(5);
    expect(calculator.division(3, -1)).toEqual(-3);
  })

  it("should divide decimal numbers", function() {
    expect(calculator.division(1.5, 0.5)).toEqual(3);
    expect(calculator.division(10.5, 2.5)).toEqual(4.2);
    expect(calculator.division(6.50, 3.25)).toEqual(2);
  })
})
