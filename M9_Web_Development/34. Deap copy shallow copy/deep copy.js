// for deep copy we convert object to string and back again to object. limitation of this method is that it does not work for functions, undefined, symbol, and circular reference objects.
// Using JSON.stringify & JSON.parse

let zoo = {
    name: 'Delhi Zoo',
    location: 'CP, New Delhi',
    animals: [
        {
            species: 'leopard',
            eats: 'meat'
        },
        {
            species: 'deer',
            eats: 'grass',
            attributes: {
                color: 'brown'
            }
        }
    ]
}

let zooStr = JSON.stringify(zoo);
let deepZoo = JSON.parse(zooStr);
// let deepZoo2 = JSON.parse(JSON.stringify(zoo));

deepZoo.animals[0].eats = 'grass';
console.log(deepZoo.animals[0]); // Output: { species: 'leopard', eats: 'grass' }
console.log(zoo.animals[0]); // Output: { species: 'leopard', eats: 'meat' }

zoo.animals[1].attributes.color = 'black';
console.log(zoo.animals[1].attributes.color); // Output: black
console.log(deepZoo.animals[1].attributes.color) // Output: brown