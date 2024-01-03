var promise = new Promise(function(resolve, reject) {
  const x = "revature";
  const y = "revature"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
});
  
promise.
    then(function () {
       // console.log('Success');
       console.log("Success");
    }).
    catch(function () {
       console.log('Some error has occured');
    });
