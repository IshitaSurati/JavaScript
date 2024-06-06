/*Polymorphism is a fundamental concept in object-oriented programming, 
referring to the ability of different objects to be treated as instances 
of a common superclass. This allows for methods to be invoked on objects 
of different classes without knowing their specific types at compile time.*/


// Define a superclass
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}
// Define subclasses
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}
class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}
// Usage
const shapes = [new Circle(), new Square()];

shapes.forEach(shape => {
    shape.draw(); 
});
