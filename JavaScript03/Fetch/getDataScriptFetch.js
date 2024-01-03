var apiURL = 'http://localhost:8080/students/';

document.getElementById('getData').onclick = getData;

function getData() {
    // If using input for identifiers, etc.
   
    var userInput = document.getElementById('dataInput').value;

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
    idTag.innerHTML=response[0].id

    var nameTag = document.createElement('h3');
    nameTag.innerHTML=response[0].name

    dataSection.appendChild(idTag);
    dataSection.appendChild(nameTag);
    
}
