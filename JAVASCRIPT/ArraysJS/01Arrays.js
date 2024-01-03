// Array Creation
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
let primes = new Array(2, 3, 5, 7, 11, 13);
console.log(primes);

// Access individual elements   
console.log("accessing second element in Cars");
console.log(cars[1]);

//changing element
cars[1]="opel";
console.log(cars);

// length of arrary
console.log(cars.length);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);


console.log(fruits); 
console.log(citrus);
// for Each
console.log("***** For Each **********")
fruits.forEach((fruit)=>console.log(fruit))
//Sort
console.log("******* SORT *********")
console.log(fruits.sort().reverse());
// Filter
console.log("******** Filter ********")
console.log(fruits.filter((fruit)=>fruit.includes("A")));
// Map
console.log("***** Map ******")
console.log(fruits.map((fruit=>fruit.toUpperCase())));
// Reduce
let numbers = [1, 2, 3, 4, 5, 6, 7]
let result = numbers.reduce(function(previousValue, currentValue) {return previousValue + currentValue})
console.log(result) // 28