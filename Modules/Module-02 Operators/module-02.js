//************************************************************************* */
//
// Module:      03
// Title:       Operators
// Guide Link:  https://michu44.github.io/Node.js-101/
// Author:      Michael Lopez
// Publisher:   EasyAcademy
// Website:     https://www.easyacademy.swiss/Node-JS-Guide
//
//************************************************************************* */

// Operators
// Equals
console.log(1 == 1); //true

// Not Equals
console.log(1 != 1); //false

// smaller as
console.log(0 < 1); //true

// biger as
console.log(0 > 1); //false

// smaller or equals
console.log(0 <= 1); // true
console.log(1 <= 1); // true
console.log(2 <= 1); // false


console.log(0 >= 1); // false
console.log(1 >= 1); // true
console.log(2 >= 1); // true


// Equality
console.log(1 == "1"); //true
// Strict Equality
console.log(1 === "1"); //false

/*

The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. 
Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

*/

console.log(1 !== "1"); //true


// Increment
var i = 1;
i++;

console.log(i); //2 -> Eselsbrücke C++ oder +1


// Decrement
var d = 1;
d--;

console.log(d); //0

// Logic operator

// AND
console.log(1 == 1 && 2 == 2); // true
console.log(true && true) // true
console.log(1 == 1 && 2 == 3); // false
console.log(true && false) // false


// OR
console.log(1 == 1 || 2 == 2); // true
console.log(true || true) // true
console.log(1 == 1 || 2 == 3); // true
console.log(true || false) // true
console.log(1 == 0 || 2 == 3); // false
console.log(false || false) // false


console.log(true && (true || false)) // true
console.log(1 == "1" && (1 < 2 || 2 <=2)) // true

if (1 == "1" && (1 < 2 || 2 <=2)){
    console.log("thistrue");
}
else {
    console.log("thisnottrue");
}


if (1 == "1" && (1 < 2 || 2 <=2)){
    console.log("thistrue"); // this is printed
}
else if (1 == 1 && 2 == 2) {
    console.log("thistrue 2");
}
else {
    console.log("thisnottrue");
}

if (false){
    console.log("thistrue"); // this is not printed
}
else if (1 == 1 && 2 == 2) {
    console.log("thistrue 2"); // this is printed
}
else {
    console.log("thisnottrue");
}



if (1 == "1" && (1 < 2 || 2 <=2)){
    console.log("thistrue");
}
if (1 == 1 && 2 == 2) {
    console.log("thistrue 2");
}


var isEqual = true;

if (isEqual){
    console.log(isEqual); // true
}



function sum(num1, num2) {    
	var retVal = num1 + num2;
	return retVal;
}

var reult = sum(2, 2);
var reult2 = sum(12,24);


