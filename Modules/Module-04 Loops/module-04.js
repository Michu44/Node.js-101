//************************************************************************* */
//
// Module:      03
// Title:       Loops
// Guide Link:  https://michu44.github.io/Node.js-101/
// Author:      Michael Lopez
// Publisher:   EasyAcademy
// Website:     https://www.easyacademy.swiss/Node-JS-Guide
//
//************************************************************************* */

// Loops

// ForEach Loop
// Loop through each element of the array
arrayA.forEach((item, index) => {
    console.log (index, item)
})

// while Loop
var o = 0;
while (o < 10){
    console.log("." + o);
    o++;
}

// for loop
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// Break the loop
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i === 3) { 
        break; 
    }
}