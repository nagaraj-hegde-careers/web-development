class Vehicle {
    // Write Code here -----
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}
  
class Car extends Vehicle {
    // Write Code here -----
    constructor(make, model, numDoors){
        super(make, model);
        this.numDoors = numDoors;
    }
}

const car1 = new Car('Toyota', 'Camry', 4);
console.log(car1.make);  // Output: 'Toyota'
console.log(car1.model); // Output: 'Camry'
console.log(car1.numDoors); // Output: 4