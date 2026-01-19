const person1 = {
    name: 'john',
    age: 25,
    printNameAndAge: function (location, country) {
        console.log(`My name is ${this.name} and I am ${this.age} years old. I am from ${location}, ${country}.`)
    }
}

const person2 = {
    name: 'jill',
    age: 18,
    job: 'sde'
}

person1.printNameAndAge('Delhi', 'Ind'); // Output: My name is john and I am 25 years old. I am from Delhi, Ind.
person1.printNameAndAge.apply(person2, ['Mumbai', 'india']); // Output:My name is jill and I am 18 years old. I am from Mumbai, india.

// Find maximum number in an array..

const numbers = [5, 6, 2, 1, 9];

console.log(Math.max.call(null, 5, 6, 2, 1, 9)); // Output: 9
console.log(Math.max.apply(null, numbers)); // Output: 9 (better approach)
// Another way without call, apply
console.log(Math.max(...numbers)); // Output: 9