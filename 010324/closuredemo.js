function greeting(){
    var message="Bazeer";
    function sayHi(){
        console.log(message);
    }
    return sayHi;
}

let hi=greeting();

console.log(hi);
hi();