//************************************************************************* */
//
// Module:      03
// Title:       Arrays
// Guide Link:  https://michu44.github.io/Node.js-101/
// Author:      Michael Lopez
// Publisher:   EasyAcademy
// Website:     https://www.easyacademy.swiss/Node-JS-Guide
//
//************************************************************************* */


// Arrays
var arrayA = [ "Scope", "Cone" ] // string array with 2 elements
var scope = arrayA[0]; // read element at index 0
console.log(scope);

var cone = arrayA.find(e => e == "Cone"); // Find element with value "Cone"
console.log(cone);

var indexOfE = arrayA.indexOf("Cone"); // Get index of element with value "Cone"
console.log(indexOfE);

var arrayB = [ 1, 3, 5, 7, 9, 13 ] // int array
var biggerAs = arrayB.find(e => e > 8);
console.log(biggerAs); // returns [9]

var biggerAs2 = arrayB.filter(e => e > 8);
console.log(biggerAs2); // returns [9, 13]


var doesConeExist = arrayA.includes("Cone"); // Check if Cone exists
console.log(doesConeExist); // true


var indexOfE = arrayA.indexOf("Cone"); // Check if Cone exists variant 2
console.log(indexOfE != -1); // true

var indexOfC = arrayA.indexOf("Cones"); // Check if Cone exists variant 2
console.log(indexOfC != -1); // false

// add element to the end of the array
arrayA.push("Car");
console.log(arrayA);

// removes the last element of the array
arrayA.pop();
console.log(arrayA);

// removes the first element
arrayA.shift()
console.log(arrayA);

// adds to the array in the first element
arrayA.unshift("Hello World");
console.log(arrayA);

// Sort the Array (by alphabet)
arrayA.sort();
console.log(arrayA);

// implement custom sort algorithm
// sorts without "Gross und kleinschreibung"
arrayA.sort(function (l,u) {
    return l.toLowerCase().localeCompare(u.toLowerCase());
});
console.log(arrayA);

// reverse the order of the array
arrayA.sort();
arrayA.reverse();
console.log(arrayA);