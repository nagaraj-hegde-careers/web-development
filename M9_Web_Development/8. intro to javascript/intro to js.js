console.log("Hello world from main JS");
var Hi = "how are you!! ";
console.log(Hi);

let hi2 = 'im using let '
console.log(hi2);

const hi3 = 'im using const '
console.log(hi3);

console.log(Hi + hi2 + hi3)

var a = 1;
console.log(a)

var a = false;
console.log(a)

let b = 1;
console.log(b)

b = 2;
console.log(b)

b = [1, 2, 3]
console.log(b)


const c = "hi im const"
// c = 1; //TypeError: Assignment to constant variable.

const PI = 3.14;
console.log(PI)

// undefined
// let sc=;
// typeof(sc)

// Array
let arr = [1,2,3,4,5]
console.log(arr[0])

arr[3] = "hello"
console.log(arr[3])

arr[5]= false
console.log(arr)

arr[4] = true

arr.push("last added")
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift("added in beginning")
console.log(arr)
arr.shift()
console.log(arr)

arr.splice(2, 1, "replaced")
console.log(arr)



// Objects

let person = {
    name: "Nagaraj",
    age: 33,
    profession: "SDE",
    place: "India"
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.profession)
console.log(person['place'])

person.hobbies = ['books', 'games', 'exercise']
console.log(person)
person.address = {
    country: "India",
    State: {
        name: "Karnataka",
        city: "Bengaluru",
        pincode: 560091
    }
}

console.log(person)

console.log(person.address.State.name)

delete person.address.State.pincode
console.log(person.address.State)

