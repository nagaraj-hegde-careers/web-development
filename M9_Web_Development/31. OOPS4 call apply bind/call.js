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

person1.printNameAndAge('Delhi', 'India'); // Output: My name is john and I am 25 years old. I am from Delhi, India.
person1.printNameAndAge.call(person2, 'Mumbai', 'Ind'); // output: My name is jill and I am 18 years old. I am from Mumbai, Ind.