const getSomeThing=()=>{
    return new Promise((resolve,reject)=>{
        // Fetch some Data
       resolve('Some Data')
        reject('Some Error')
    });
 }

// getSomeThing().then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

getSomeThing().then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
