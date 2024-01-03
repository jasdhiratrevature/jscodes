function addNums(...nums){ // This is Rest Operator
    var sum=0;
    for(let i of nums){
    //sum=sum+i;
    sum+=i;
    }
    return sum
}

var myNums=[1,2,3,4,5];
console.log("Adding :: "+addNums(...myNums)); // This is Spread Operator

//console.log("Result = "+addNums(1,2,3,4));
//console.log("Result = "+addNums(1,2,3));
//console.log("Result = "+addNums(1,2));

//console.log("Result = "+addNums(1,2,3,4,5));