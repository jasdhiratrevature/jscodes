function outerFunc() {
    let outerVar = 'I am outside!';
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
    }
    return innerFunc;
  }
//   function exec() {
//     const myInnerFunc = outerFunc();
//     myInnerFunc();
//   }
//   exec();
let inner=outerFunc();
inner();