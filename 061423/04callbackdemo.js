function doHomeWork(subject,callback){
    //console.log ("Starting my "+subject+" homework")
    console.log(`Starting my ${subject} Homework`) // Template Literals
    callback();
}

function completedHomeWork(){
    console.log("Home Work Completed");
}

doHomeWork("Java",completedHomeWork);
