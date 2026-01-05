// Constructor function for Person
function Person(name) {
    this.name = name;
}
  
// Prototype for Person
Person.prototype.introduce = function() {
    return `Hi, I'm ${this.name}.`;
}

const person1 = new Person("John");
const person2 = new Person("Jane");

console.log(person1.introduce());
console.log(person2.introduce());
