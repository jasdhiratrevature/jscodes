//The closure is a function that accesses its lexical scope 
//even executed outside of its lexical scope.

function outerFunc() {
    let outerVar = 'I am outside!'; // Lexical Scope
    function innerFunc() { //closure
      console.log(outerVar); // => logs "I am outside!"
    }
    return innerFunc;
  }
  
  function exec() {
    const myInnerFunc = outerFunc();
    myInnerFunc();
  }
  exec();