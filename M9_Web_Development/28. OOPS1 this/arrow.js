// function add(a, b) {
//     console.log("hello");
//     return a + b;
// }
// console.log(add(1, 2));

// const add2 = (a, b) => a + b;
// console.log(add2(1, 2));

// const add3 = (a, b) => {
//     console.log("hello again");
//     return a + b;
// }
// console.log(add3(1, 2));

//  this in arrow functions
// const person = {
//     name: 'john doe',
//     arrow: () => console.log(`arrow: ${this.name}`), // Output node: arrow: undefined , Output browser: arrow: 
//     fn: function () {
//         console.log(`regular: ${this.name}`) // Output node: regular: john doe , Output browser: regular: john doe
//     }
// }
// console.log(person.arrow()); // Output node: undefined , Output browser: undefined
// console.log(person.fn()); // Output node: undefined , Output browser: undefined

// Usefulness of this in arrow function
const person2 = {
    name: 'jane',
    eventuallySayName: function () {
        function actuallySayName() {
            console.log(`first: ${this.name}`);
        }
        const actuallySayNameArrow = () => {
            console.log(`second: ${this.name}`);
        }
        actuallySayName(); // Output node: first: undefined , Output browser: first:
        actuallySayNameArrow(); // output node, browser: second: jane
    }
}
person2.eventuallySayName();