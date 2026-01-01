class Person {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }

    static myMethod() {
        console.log("i'm static...");
    }
}

const obj1 = new Person('john');
const obj2 = new Person('mark');

obj1.print(); //Output: john
obj2.print(); // output: mark

Person.myMethod(); //Output: i'm static...
Person.print(); // Output: TypeError: Person.print is not a function
