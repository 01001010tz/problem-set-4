/*
 * Hello. 2 points.
 */

function hello() {
let HelloText = document.getElementById("output1");
HelloText.innerHTML = ("Hello, AP Computer Science Principles!");
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {
  //////////// DO NOT MODIFY      Use the @name variable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.
  name = prompt("What's your name?");
  let HelloAgainText = document.getElementById("output2");
  HelloAgainText.innerHTML = "Hello, " + name + "!";
  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {
  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.
  let fahrenheit = ((cels * 1.8) + 32).toFixed(2);
  let FOutput = document.getElementById("output3");
  FOutput.innerHTML = cels + " degrees Celsius equals " + fahrenheit + " degrees Fahrenheit.";
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {
  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.
  let celsius = ((fahr-32)/1.8).toFixed(2);
  let COutput = document.getElementById("output4");
  COutput.innerHTML = fahr + " degrees Fahrenheit equals " + celsius + " degrees Celsius.";
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
let milesCount = Math.floor(inches/63360);
let yardsCount = Math.floor((inches - (milesCount* 63360))/36);
let feetCount =  Math.floor((inches - (milesCount * 63360) - (yardsCount * 36))/ 12);
let inchCount = inches - (milesCount * 63360) - (yardsCount * 36) - (feetCount * 12);
let InchesProblemCounts = document.getElementById("output5");
InchesProblemCounts.innerHTML = "Miles: " + milesCount + "<br/>Yards: " + yardsCount + "<br/>Feet: " + feetCount + "<br/>Inches: " + inchCount;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.
  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY
let kmCount = Math.floor(centimeters/100000);
let mCount = Math.floor((centimeters - (kmCount* 100000))/100);
let cmCount = centimeters - (kmCount * 100000) - (mCount * 100);
let MetricCounts = document.getElementById("output6");
MetricCounts.innerHTML = "Kilometers: " + kmCount + "<br/>Meters: "+ mCount + "<br/>Centimeters: "+ cmCount;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

let gallonCount = Math.floor(fluidOunces/128);
let quartCount = Math.floor((fluidOunces - (gallonCount * 128))/32);
let pintCount = Math.floor((fluidOunces - (gallonCount * 128) - (quartCount * 32))/16);
let cupCount = Math.floor((fluidOunces - (gallonCount * 128) - (quartCount * 32) - (pintCount * 16))/8);
let flozCount = fluidOunces - (gallonCount * 128) - (quartCount * 32) - (pintCount * 16) - (cupCount * 8);
let FluidOunceCounts = document.getElementById("output7");
FluidOunceCounts.innerHTML = "Gallons: " + gallonCount + "<br/>Quarts: " + quartCount + "<br/>Pints: " + pintCount + "<br/>Cups: " + cupCount + "<br/>Fluid Ounces: " + flozCount;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
let tonCount = Math.floor(ounces/32000);
let poundCount = Math.floor((ounces - (tonCount* 32000))/16);
let ounceCount = ounces - (tonCount * 32000) - (poundCount * 16);
let OuncesCounts = document.getElementById("output8");
OuncesCounts.innerHTML = "Tons: " + tonCount + "<br/>Pounds: "+ poundCount + "<br/>Ounces: "+ ounceCount;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
let DollarCount = Math.floor(pennies/100);
let quarterCount = Math.floor((pennies - (DollarCount * 100))/25);
let dimeCount = Math.floor((pennies - (DollarCount * 128) - (quarterCount * 25))/10);
let nickelCount = Math.floor((pennies - (DollarCount * 128) - (quarterCount * 25) - (dimeCount * 10))/5);
pennyCount = pennies - (DollarCount * 100) - (quarterCount * 25) - (dimeCount * 10) - (nickelCount * 5);
let MoneyCounts = document.getElementById("output9");
MoneyCounts.innerHTML= "Dollars: " + DollarCount + "<br/>Quarters: " + quarterCount + "<br/>Dimes: " + dimeCount + "<br/>Nickels: " + nickelCount + "<br>Pennies: " + pennyCount;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
amount = amount * 100;
let quarterCount = Math.floor(amount/25);
let dimeCount = Math.floor((amount - (quarterCount* 25))/10);
let nickelCount =  Math.floor((amount - (quarterCount * 25) - (dimeCount * 10))/ 5);
let pennyCount = Math.floor(amount - (quarterCount * 25) - (dimeCount * 10) - (nickelCount * 5));
let coinsCount = quarterCount + dimeCount + nickelCount + pennyCount;
let Change = document.getElementById("output10");
Change.innerHTML = coinsCount + " coins.";
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
