function doSomeThing(){
    console.log("Inside Function doSomeThing")
    var fruits=["Apple","Banana","Orange"] //0
    console.log("Fruits :: "+fruits[fruits.length])
    var x=10;
    if(x===10)
    throw ("Cannot be 10")
    try{
    console.log(n)
    }catch(error){
        console.log(error.name+" , "+ error.message)
    }
     finally{
        console.log("Finally ...")
    }
    console.log("Work completed, going out of the function ")
}

doSomeThing();