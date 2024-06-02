class Person {
    constructor(firstName, lastName, age, hobbies, city, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
         this.hobbies = hobbies;
        this.address = {
            city: city,
            country: country
        };
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let data = new Person("Ishita", "Surati", 20, ["Dancing"], "Surat", "Gujarat");
console.log(data);
console.log(data.fullName()); // Ishita Surati
