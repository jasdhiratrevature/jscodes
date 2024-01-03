function handleClick(){
    alert("Script !!")
    var myElements=document.querySelectorAll("p.myP")
    //var myElements=document.querySelector(".myP")
    //console.log(myElements.textContent)
    for(var i=0;i<myElements.length;i++){
        myElements[i].style.backgroundColor = "red";
        console.log(myElements[i].textContent)
        
    }
}