// Endpoint you are sending a GET request to
var apiURL = 'http://localhost:8080/students'; 
//https://reqres.in/api/users/2
function getAllStudents(){
    alert("it works");
   
     // STEP 1: Create an XML Http Request object
     var xhttp = new XMLHttpRequest();

     // STEP 2: Set a callback function for the readystatechange event
     xhttp.onreadystatechange = receiveData;

      // STEP 3: Open the request
      xhttp.open('GET', apiURL);

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
     //   var dataSection = document.getElementById('allDataDiv');
      //  dataSection.innerHTML = '';
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // Ready state is DONE, HTTP status code is "OK"
                var response = xhttp.responseText;
                response = JSON.parse(response);
             displayData(response);
                console.log(response)
            } else {
                // Ready state is DONE but status code is not "OK"
                //dataSection.innerHTML = 'It Got Away!';
            }
        } else {
            // Ready state is not DONE
            /*
                Can have some sort of "loading" action
            */
        }
    }
}

function displayData(response) {
    var dataSection = document.getElementById('allDataDiv');
    
  // alert(response.length)
   var list=document.createElement("ul");
   
   for(i=0;i<response.length;i++){
    var item=document.createElement("li");
       item.innerHTML=response[i].id +" "+response[i].name;
      // alert(response[i].id +" "+response[i].name);
       list.appendChild(item);
   }
   dataSection.appendChild(list);

   
}