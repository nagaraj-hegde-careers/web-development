const person = {
    name: "John Doe",
    log: function () {
        console.log('here...');
    }
};
console.log(person);
// hasOwnProperty returns true if a particular property is a direct property of that object
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("age")); // Output: false
person.log();

// using prototype...
function Car(model, year) {
    this.model = model;
    this.year = year;

    this.displayInfoOld = function () {
        return `This is a ${this.year} ${this.model}`
    }
}

Car.prototype.displayInfo = function () {
    return `This is a ${this.year} ${this.model}`
}

// Setting a generic method via __proto__ [not recommended]
Car.prototype.__proto__.displayGenericInfo = function () {
    return `This is from year ${this.year}.`
}

let car1 = new Car("Kia Sonet", 2025);
let car2 = new Car("Tata Nexon", 2022);

console.log(car1.displayInfoOld());
console.log(car2.displayInfo()); 
console.log(car1.displayGenericInfo());
console.log(car2.displayGenericInfo());
console.log(car1);

// Using Object.create()
let carPrototype = {
    showInfo: function() {
        return `This is a ${this.year} ${this.model}`
    }
};

let car3 = Object.create(carPrototype);
car3.model = "Honda City";
car3.year = 2020;

let car4 = Object.create(carPrototype);
car4.model = "Ford Mustang";
car4.year = 2021;

console.log(car3.showInfo());
console.log(car4.showInfo());
console.log("car3", car3);

let obj = Object.create(carPrototype);
console.log("obj", obj); // Output: obj {}
console.log(obj.showInfo()); //Output: This is a undefined undefined

