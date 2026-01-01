class Pizza2 {
    static totalPizzasMade = 0;
    #size; // private property.
    #crustType; // private property.
    
    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.#size = size;
        this.#crustType = crustType;
        Pizza2.totalPizzasMade++;
    }

    describeOrder = function () {
        console.log(`A ${this.#crustType} ${this.#size} size pizzza is ready with ${this.toppings}`);
    }

    hello() {
        console.log("hi");
    }

    static calculateTotalPizzasMade() {
        console.log(`Total pizzas:: ${Pizza2.totalPizzasMade}`);
    }
}

class StuffingCrustPizza extends Pizza2 {
    #stuffingType;
    constructor(toppings, size, crustType, stuffingType) {
        super(toppings, size, crustType);
        this.#stuffingType = stuffingType;
    }

    describeStuffingOrder() {
        console.log(`This has extra stuffing ${this.#stuffingType}.`);
    }

    // overriding describeOrder ..
    describeOrder() {
        super.describeOrder();
        console.log('im here');
        this.describeStuffingOrder();
    }
}

let customerOrder1 = new Pizza2('Olives', 'Medium', 'Cheese burst');
customerOrder1.describeOrder();

let customerOrder2 = new Pizza2('Jalapeno', 'Large', 'Thin');
customerOrder2.describeOrder();

const customerOrder3 = new StuffingCrustPizza('Chilli', 'Small', 'Pan', 'Paneer');
console.log(customerOrder3.toppings); // Chilli
console.log(customerOrder3.stuffingType); // undefined ( as it is private )
// console.log(customerOrder3.#stuffingType); // SyntaxError: Private field '#stuffingType' must be declared in an enclosing class

Pizza2.calculateTotalPizzasMade();