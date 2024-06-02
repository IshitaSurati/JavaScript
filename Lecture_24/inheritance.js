// Inheritance:
// Inheritance is a mechanism where a new class can inherit properties and methods from an existing class.

class Office {
    #salary;

    constructor(id, name, number, salary) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.#salary = salary;
    }

    // Getter method for salary
    getSalary() {
        return this.#salary;
    }

    // Setter method for salary
    setSalary(salary) {
        this.#salary = salary;
    }

    // Method to display details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Number: ${this.number}, Salary: ${this.#salary}`;
    }
}

class HR extends Office {
    constructor(id, name, number, salary, department) {
        super(id, name, number, salary);
        this.department = department;
    }

    // Method to display HR details
    displayDetails() {
        return `${super.displayDetails()}, Department: ${this.department}`;
    }
}

class Employee extends HR {
    constructor(id, name, number, salary, position) {
        super(id, name, number, salary);
        this.position = position;
    }

    // Method to display employee details
    displayDetails() {
        return `${super.displayDetails()}, Position: ${this.position}`;
    }
}

// Create instances of the classes
let officePerson = new Office(1, "John Doe", "123-456-7890", 50000);
let hrPerson = new HR(2, "Jane Smith", "987-654-3210", 60000, "Human Resources");
let employeePerson = new Employee(3, "Alice Johnson", "111-222-3333", 70000, "Software Developer");

// Test displayDetails method
console.log(officePerson.displayDetails()); // Output: ID: 1, Name: John Doe, Number: 123-456-7890, Salary: 50000
console.log(hrPerson.displayDetails());     // Output: ID: 2, Name: Jane Smith, Number: 987-654-3210, Salary: 60000, Department: Human Resources
console.log(employeePerson.displayDetails()); // Output: ID: 3, Name: Alice Johnson, Number: 111-222-3333, Salary: 70000, Position: Software Developer
