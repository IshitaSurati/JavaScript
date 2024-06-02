/*
Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure software programs. Here’s an introduction to OOP in JavaScript, covering key concepts such as classes, objects, inheritance, and encapsulation.
Key Concepts of OOP in JavaScript

Classes and Objects:
A class is a blueprint for creating objects.
An object is an instance of a class.

Encapsulation:
Encapsulation is the concept of bundling the data (attributes) and methods (functions) that operate on the data into a single unit or class.
It restricts direct access to some of the object's components, which is a way of preventing accidental interference and misuse of the data.

Inheritance:
Inheritance is a mechanism where a new class can inherit properties and methods from an existing class.

Polymorphism:
Polymorphism allows methods to do different things based on the object it is acting upon.

Abstraction:
Abstraction means hiding the complex implementation details and showing only the essential features of the object.
*/

// class:-
class Student{
    constructor(name,email,grid,course,age,number){
        this.name=name;
        this.email=email;
        this.grid=grid;
        this.course=course;
        this.age=age;
        this.number=number;
    }
    StudentDetails(){
        console.log(`name:${this.name} grid:${this.grid}`);
    }
}
    //object
    let std1=new Student("ishita","ishita@gamil.com",6703,"fsd",20,123456);
console.log(std1);


std1.StudentDetails();
