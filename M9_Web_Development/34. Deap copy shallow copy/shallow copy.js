let zoo = {
    name: "delhi zoo",
    location: "CP New Delhi",
    animals: [
        {
            species: 'leopard',
            eats: 'meat'
        },
        {
            species: 'deer',
            eats: 'grass'
        }
    ]
};

let copyZoo = zoo; // this is not a copy, it is just another reference to the same object in memory.

let shallowZoo = { ...zoo }; // this spread operator creates shallow copy.
// let shallowZoo = Object.assign(zoo); // same as above code 

shallowZoo.location = "Mumbai";
// zoo.location = "Mumbai";

console.log("zoo: ", zoo); 
// Output: 
// zoo:  {
//   name: 'delhi zoo',
//   location: 'CP New Delhi',
//   animals: [
//     { species: 'leopard', eats: 'meat' },
//     { species: 'deer', eats: 'grass' }
//   ]
// }
console.log("copyZoo: ", copyZoo);
// Output:
// copyZoo:  {
//   name: 'delhi zoo',
//   location: 'CP New Delhi',
//   animals: [
//     { species: 'leopard', eats: 'meat' },
//     { species: 'deer', eats: 'grass' }
//   ]
// }
console.log("shallowZoo: ", shallowZoo);
// Output:
// shallowZoo:  {
//   name: 'delhi zoo',
//   location: 'Mumbai',
//   animals: [
//     { species: 'leopard', eats: 'meat' },
//     { species: 'deer', eats: 'grass' }
//   ]
// }

shallowZoo.animals[0].eats = 'grass';
console.log("shallowZoo", shallowZoo.animals[0]); // Output: shallowZoo { species: 'leopard', eats: 'grass' }
console.log("copyZoo", copyZoo.animals[0]); // Output: copyZoo { species: 'leopard', eats: 'grass' }
console.log("zoo", zoo.animals[0]); // Output: zoo { species: 'leopard', eats: 'grass' }

console.log(shallowZoo.animals[0] === zoo.animals[0]) // Output: true
console.log(shallowZoo == zoo) // Output: false