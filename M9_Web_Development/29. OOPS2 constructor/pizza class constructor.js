class Pizza1 {
    static totalPizzasMade = 0;

    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
        Pizza1.totalPizzasMade++;
    }

    describeOrder() {
        console.log(`A ${this.crustType} ${this.size} size pizza is ready with ${this.toppings}`);
    }

    hello() {
        console.log("hi");
    }

    static calculateTotalPizzasMade() {
        console.log(`Total pizzas:: ${Pizza1.totalPizzasMade}`);
    }
}

class StuffingCrustPizza extends Pizza1 {
    constructor(toppings, size, crustType, stuffingType) {
        super(toppings, size, crustType); // calls the parent class constructor with super
        this.stuffingType = stuffingType;
    }

    describeStuffingorder() {
        console.log(`This has extra stuffing ${this.stuffingType}.`);
    }

    // overriding describeOrder ..
    describeOrder() {
        super.describeOrder();
        console.log("i'm here");
        this.describeStuffingorder();
    }
}

let customerOrder1 = new Pizza1("Olives", "Medium", "Cheese burst");
customerOrder1.describeOrder();

let customerOrder2 = new Pizza1("Jalapeno", "Large", "Thin");
customerOrder2.describeOrder();

const customerOrder3 = new StuffingCrustPizza('Chilli', 'Small', 'Pan', 'Paneer');
customerOrder3.describeOrder();

Pizza1.calculateTotalPizzasMade();