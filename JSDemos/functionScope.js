function func(){
    var animal ='Lion'; //exist in function scope
    console.log('inside function: ',animal);
}

func();                    //Output: "inside function: Lion"
console.log(animal);       //error: animal is not defined
