//"use strict"
function anotherAlert(){
    alert("This is From External Script .....");
    alert("This is "+"\n"+
    "from Console")
// Back ticks ` ` known as Template Literals from ES6
    alert(`This is
    another alert`)

    x="Jasdhir"
   console.log("X = "+x +" Value of x");
   console.log(`X = ${x} Value of x`);
}

(function (){console.log("IIFE ....")})();