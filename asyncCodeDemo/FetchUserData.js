function getUserData(){
   var inputId=document.getElementById("userId").value
   alert(inputId)
    fetch('http://localhost:3000/users/'+inputId)
    .then((response)=>{
        console.log('Resolved ',response)
        return response.json()
    }).then(data=>{
        console.log(data)
        displayData(data)
    }).catch(error=>{
        console.log(error)
    })
}

function displayData(data){
    console.log("In Display Data :: "+data.name)
    var dataSection=document.getElementById("myData");
    dataSection.innerHTML="";
    var idTag=document.createElement("h3");
    idTag.textContent=data.id;

    var nameTag=document.createElement("h3");
    nameTag.textContent=data.name;

    dataSection.append(idTag)
    dataSection.append(nameTag)
}