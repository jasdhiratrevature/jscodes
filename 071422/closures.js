function outerFunction(){
    var outerVar="Hello"; // Lexical Scope
    function innerFunction(){
        var innerVar="hi";
        console.log(outerVar);
    }
    innerFunction();
}