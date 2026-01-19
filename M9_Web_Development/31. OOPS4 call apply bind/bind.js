// const alice = {
//     name: 'alice',
//     age: 18,
//     printNameAndAge: function () {
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// const introduceAlice = alice.printNameAndAge.bind(alice);
// const btn = document.getElementById('intro-btn');
// btn.addEventListener('click', function (e) {
//     introduceAlice()
//     console.log(this)
// })

let user = {
    name: 'Alice',
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const user2 = {
    name: 'Bob',
    age: 30
};

// We need this function to always use `user` as its context
let boundGreet = user.greet.bind(user); // now boundGreet always has `user` as its `this`
boundGreet(); // Output: Hello, my name is Alice and I am 25 years old.

const boundGreet2 = user.greet.bind(user2);
boundGreet2(); // Output: Hello, my name is Bob and I am 30 years old.