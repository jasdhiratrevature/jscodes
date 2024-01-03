let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal	// sets animal to be a prototype of rabbit.
  };
  
  // we can find both properties in rabbit now:
  console.log( rabbit.eats ); // true 
  console.log( rabbit.jumps ); // true
  // walk is taken from the prototype
  rabbit.walk(); // Animal walk