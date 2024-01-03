var hello=function myFunction(){
    return "Hey Its me"
}

var arrowHello=() =>  "Hey Its me an Arrow Function" 

var addNums=(n1,n2) =>{ 
    var result=n1+n2;
    console.log("Result :: "+result);
 }

console.log(hello());
console.log(arrowHello());
addNums(10,20);