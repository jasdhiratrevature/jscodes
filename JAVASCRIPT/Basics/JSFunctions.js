function sum(val1,val2){
    return val1+val2;
}

//var result=sum(10,20);

console.log(sum(10,30));

var multiplyFunction=function multiply(val1, val2){
    return val1*val2;
}

var result=multiplyFunction(10,20);
//var result=multiply(20,20); // ReferenceError: multiply is not defined
console.log(result);

var hello=function (){console.log("Hello World");}
hello();

var sub=function(v1,v2){return v1-v2;}
console.log(sub(20,10));