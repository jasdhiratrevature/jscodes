var addExpression=function add(n1=10,n2=20){
    return (n1+n2);
}

//var result=add(10,20); -- invalid
var result=addExpression();
console.log(result);

var arrow=(a,b)=> (a+b);


console.log("Arrow Function : "+arrow(4,4));