var message="I am a Global Variable";

function greeting(){
    console.log(message);
}

function greet(){
    console.log("Inside Greet " + message)
}
greeting();
greet();