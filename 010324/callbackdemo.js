function doHomeWork(subject,callfunc){
    console.log("Starting my "+subject+" home work");
    console.log(`Starting my ${subject} home work again `)
    callfunc();
}

function alertFinished(){
    console.log("Finished the home work")
}

doHomeWork('Math',alertFinished);