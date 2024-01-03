// const getTodos=()=>{
//    fetch('todos.json')
//     .then((response)=>{return response.json();})
//     .then(data=>{console.log(data)})
//     .catch(error=>{console.log(error)
//     }) 
// }

const getTodos=async ()=>{
   const response=await fetch('todos.json');
   const data = await response.json()
   //console.log(data)
   return data;
}

console.log(1)
console.log(2)
getTodos()
    .then(data=>{console.log(data)})
    .catch(error=>{console.log(error)})
console.log(3)
console.log(4)