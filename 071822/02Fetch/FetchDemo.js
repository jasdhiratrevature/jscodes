// Endpoint you are sending a GET request to
//var apiURL = 'http://localhost:8080/emprest/webapi/personapi/persons/';
var apiURL = 'http://localhost:3000/employees/';

document.getElementById('getData').onclick = getDataFunction;

function getDataFunction() {
    // If using input for identifiers, etc.
   
    var userInput = document.getElementById('dataInput').value;
    alert(userInput)

    http://localhost:3000/employees/2
    fetch(apiURL+''+userInput)
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => populateData(json))    //pass data to populateDate() OR print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
}

function populateData(response) {
    var dataSection = document.getElementById('restData');
    dataSection.innerHTML='';
    
    var idTag = document.createElement('h3');
    idTag.innerHTML=response.id

    var nameTag = document.createElement('h3');
    nameTag.innerHTML=response.first_name

    dataSection.appendChild(idTag);
    dataSection.appendChild(nameTag);
    
}

