// Endpoint you are sending a GET request to

var apiURL = 'http://localhost:8080/students/';

document.getElementById('getData').onclick = getData;

function getData() {
    // If using input for identifiers, etc.
    
    var userInput = document.getElementById('dataInput').value; // 5

    // 4 steps to making an AJAX call
    // STEP 1: Create an XML Http Request object
    var xhttp = new XMLHttpRequest();

    // STEP 2: Set a callback function for the readystatechange event
    xhttp.onreadystatechange = receiveData;

    // STEP 3: Open the request
    
    //https://reqres.in/api/users/5
    xhttp.open('GET', apiURL + '' + userInput);

    // STEP 4: Send the request
    xhttp.send();

    // This needs to be an inner function so that it has closure to xhttp.
    function receiveData() {
        /*
            Different ready states of an XMLHttpRequest object
            0: UNSENT
            1: OPENED
            2: HEADERS RECEIVED
            3: LOADING
            4: DONE
        */
        // Emptying out the div before inserting new data.
        var dataSection = document.getElementById('restData');
        dataSection.innerHTML = '';
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // Ready state is DONE, HTTP status code is "OK"
                var response = xhttp.responseText;
                response = JSON.parse(response);
                displayStudentData(response);
                console.log(response)
            } else {
                // Ready state is DONE but status code is not "OK"
                dataSection.innerHTML = 'It Got Away!';
            }
        } else {
            // Ready state is not DONE
            /*
                Can have some sort of "loading" action
            */
        }
    }
}

function displayStudentData(response) {
    var dataSection = document.getElementById('restData');
    
    var idTag = document.createElement('h3');
    idTag.innerHTML=response[0].id;

    var nameTag = document.createElement('h3');
    nameTag.innerHTML=response[0].name

    dataSection.appendChild(idTag);
    dataSection.appendChild(nameTag);
   
}

