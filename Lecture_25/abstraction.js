/* An abstract class in programming is a blueprint for other classes. 
It defines common methods and properties that its subclasses should implement. 
Unlike regular classes, abstract classes cannot be instantiated directly; 
they serve as a template for other classes to inherit from. 
Subclasses must provide implementations for all abstract methods defined in the abstract class. */

// Define the abstract class using the `class` syntax
class Shape {
  constructor() {
      if (new.target === Shape) {
          throw new Error("Cannot instantiate abstract class");
      }
  }

  // Define an abstract method that must be implemented by subclasses
  calculateArea() {
      throw new Error("Method 'calculateArea()' must be implemented by subclasses");
  }
}

// Define a subclass
class Circle extends Shape {
  constructor(radius) {
      super(); // Call the constructor of the superclass
      this.radius = radius;
  }

  // Implement the abstract method
  calculateArea() {
      return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log("Area of circle:", circle.calculateArea()); 

  



 
