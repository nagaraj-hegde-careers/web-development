const car = {
    make: "Toyota",
    engine: {
        start: function() {
            console.log("Car started: " + this.make);
        }
    }
};

// Bind the start method to car object
car.engine.start = car.engine.start.bind(car);

car.engine.start();  // Output: Car started: Toyota

