function getUserData(){
    var inputId=document.getElementById("userId").value;
    alert(inputId)
    fetch('http://localhost:3000/users/'+inputId).then((response)=>{
    console.log('resolved',response)
    if(response.status===404)
    console.log("Error .....")
    else
    return response.json();
  }).then((data)=>{
    console.log(data)
    displayData(data);
  }).catch((error)=>{
    console.log('rejected',error)
    errorPage();
})
}

function displayData(data){
    console.log("Name :: "+data.name);
    var dataSection=document.getElementById("myData");
    dataSection.innerHTML="";
    var idTag=document.createElement("h3");
    idTag.innerHTML=data.id;
    var nameTag=document.createElement("h3");
    nameTag.innerHTML=data.name;
    var emailTag=document.createElement("h3");
    emailTag.innerHTML=data.password;

    dataSection.append(idTag);
    dataSection.append(nameTag);
    dataSection.append(emailTag)
    
}

function errorPage(){
  var dataSection=document.getElementById("myData");
  dataSection.innerHTML="Some Error Occured...";
}