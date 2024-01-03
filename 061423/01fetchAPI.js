
//fetch('todos.json').then((response)=>{
  fetch('http://localhost:7000/users').then((response)=>{
    console.log('resolved',response)
    return response.json();
  }).then((data)=>{
    console.log(data)
  }).catch((error)=>{
    console.log('rejected',error)
})