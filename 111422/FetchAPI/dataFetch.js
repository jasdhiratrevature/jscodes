var apiURL = 'http://localhost:3000/employees/';

document.getElementById("b1").addEventListener("click",getData)

function getData(){
    fetch(apiURL)
    .then(response=>response.json())
    .then(json=>populateData(json))
}

function populateData(response){
alert(response.length)
for(i=0;i<response.length;i++){
    alert(response[i].id);
}
}