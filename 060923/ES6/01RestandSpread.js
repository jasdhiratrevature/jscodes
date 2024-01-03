function fun(...input){ 
	let sum = 0; 
	for(let i of input){ 
		sum+=i; 
	} 
	return sum; 
} 
console.log("Using Rest : "+fun(1,2)); 

function add(...numbersToAdd) { // This is a Rest parameter
    let sumSpread=0;
    for(let i of numbersToAdd)
        sumSpread+=i;

        return sumSpread
     }
   
     var numbers = [1, 2, 3];
     console.log("Using Spread :: " +add(...numbers)); // this is a Spread operator
  