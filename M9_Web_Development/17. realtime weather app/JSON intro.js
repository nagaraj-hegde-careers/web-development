let toys = {
    toy1: {
        "name": 'chess',
        "price": 200
    },
    toy2: {
        "name": 'mechanics',
        "price": 1000
    }
}
console.log(typeof toys)

let toysToString = JSON.stringify(toys);
console.log (typeof toysToString)
console.log(toysToString)

let unpackedToys = JSON.parse(toysToString);
console.log(typeof unpackedToys)
console.log(unpackedToys)