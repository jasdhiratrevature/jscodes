var apiURL = 'http://localhost:8080/students';
function getAllStudents(){
    alert("it works");
    fetch(apiURL)
    .then(response => response.json())  // convert to json
    .then(json => displayData(json))    //pass data to displayData() OR print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
}

function displayData(response) {
    var dataSection = document.getElementById('allDataDiv');
    
   alert(response.length)
   var list=document.createElement("ul");
   
   for(i=0;i<response.length;i++){
    var item=document.createElement("li");
       item.innerHTML=response[i].id +" "+response[i].name;
       alert(response[i].id +" "+response[i].name);
       list.appendChild(item);
   }
   dataSection.appendChild(list);

   
}

