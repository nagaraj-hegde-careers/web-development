function deepClone(obj) {
    // only work for type  of objects
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // check for array.
    if (Array.isArray(obj)) {
    // if(obj instanceof Array) {
        let copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Function) {
        return obj.bind({});
    }

    if (obj instanceof Object) {
        let copy = {};
        for (let key in obj) {
            copy[key] = deepClone(obj[key])
        }
        return copy;
    }
}

let person = {
    name: 'john',
    age: 20,
    qualities: {
        height: 'tall',
        hobbies: ['reading', 'watching movies']
    },
    sayhello() {
        console.log(`Hi, I am ${this.name} and ${this.age} years old.`)
    }
}

// const newPerson = JSON.parse(JSON.stringify(person))
// console.log("newPerson: ", newPerson);
// Output:
// newPerson:  {
//   name: 'john',
//   age: 20,
//   qualities: { height: 'tall', hobbies: [ 'reading', 'watching movies' ] }
// }
// console.log(newPerson.sayhello); // Output: undefined

const deepPerson = deepClone(person);

person.name = 'jill';
person.age = 40;
person.qualities = {height: 'short', hobbies: ['none']}

deepPerson.sayhello = "i'm a string now";

console.log("person: ", person)
// Output:
// person:  {
//   name: 'jill',
//   age: 40,
//   qualities: { height: 'short', hobbies: [ 'none' ] },
//   sayhello: [Function: sayhello]
// }
console.log("deepPerson: ", deepPerson);
// Output:
// deepPerson:  {
//   name: 'john',
//   age: 20,
//   qualities: { height: 'tall', hobbies: [ 'reading', 'watching movies' ] },
//   sayhello: "i'm a string now"
// }