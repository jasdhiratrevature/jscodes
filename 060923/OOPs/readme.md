## JavaScript classes
JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance. 

## Object prototypes
Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every object in JavaScript has a built-in property, which is called its prototype.

```javascript
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

- In JavaScript, a prototype can be used to add properties and methods to a constructor function. And objects inherit properties and methods from a prototype.

- The __proto__ is an object within every object that points out (references) the prototype that has been set for that object. __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
- The prototype property is only present for functions and is a property that’s set only if you’re using the ‘new’ keyword when creating objects with this (constructor) function.

https://www.w3schools.com/js/js_object_prototypes.asp
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
https://medium.com/@venkatiyengar/proto-vs-prototype-d3c9df933f58