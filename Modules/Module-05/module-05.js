
// Array of car objects
// Create array of car objects

var car = { make: "opel", model: "ascona", ps: 50 };
var car2 = { make: "opel", model: "cadet", ps: 100 };
var car3 = { make: "opel", model: "corsa", ps: 600 };

var carArray = [ car, car2 ]

console.log(carArray);

// Add new car to array

carArray.push(car3);

console.log(carArray);


// Find car with more than 500 PS in Array
var biggerAs500PS = carArray.find(e => e.ps > 500);

console.log(biggerAs500PS);

// Random 0 - 10
var random = Math.random() * 10 
console.log(random);

// Get random car from array
var randomCarIndex = Math.round(Math.random() * carArray.length -1, 0);
var randomCar = carArray[randomCarIndex]; 
console.log(randomCar);

// String Format
var i = 10;
var message = `message ${i} randomCar input ${randomCar.model} Test`;
console.log(message);
var message = 'message ' + i + " randomCar input " + randomCar.model + " Test";
console.log(message);

// Switch Case
var something = "Apple";
switch (something){
    case "Apple":
        console.log("Apple iPhone");
        break;
    case "Android":
        console.log("Android Smartphone");
        break;
    default:
        console.log("Some smartphone")
        break;
}


// TODO: Functions with Out Parameters (Callbacks, see HTTP.request)