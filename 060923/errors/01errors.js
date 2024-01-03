function forError(){
    try{
       
    console.log(n);
    
    }
    catch(error){
        console.log(error.name + "\n"+ error.message)
    }
    finally{
        console.log("I am the Finally ...")
    }
    console.log("This Prints")
}
   
forError();