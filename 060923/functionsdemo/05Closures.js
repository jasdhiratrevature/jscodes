function greeting(){
    var message="I am greeting";
    function sayHi(){
        console.log(message)
    }
    return sayHi;
}

let somevar=greeting();
console.log("Printing somevar :::: "+somevar)
somevar();