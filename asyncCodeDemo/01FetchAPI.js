// defining a function or calling a function 
//fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
fetch('http://localhost:3000/users').then((response)=>{
    console.log('Resolved ', response)
        return response.json();
}).then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})


// fetch -- promise