class Vehicle {
    start() {
      console.log("Vehicle started!");
    }
}
  
class Car extends Vehicle {
    // Write Code here ========
    start(){
        console.log("Car started!");
    }
}
  
class Motorcycle extends Vehicle {
    // Write Code here ========
    start(){
        console.log("Motorcycle started!");
    }
}

const car = new Car();
car.start(); // Output: "Car started!"

const motorcycle = new Motorcycle();
motorcycle.start(); // Output: "Motorcycle started!"