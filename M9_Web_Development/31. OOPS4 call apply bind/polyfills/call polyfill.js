let car = {
    name: "Mercedes Benz",
    color: "Black"
}
function buyCar(price, type) {
    console.log(`${this.color} "${this.name}" ${type} car costs ${price}.`)
}
buyCar.call(car, 3000000, 'Sports');

// create polyfill for call method
// ..args denotes rest parameters
Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + 'is not callable. It should be a function');
    }
    // console.log(this); // [Function: buyCar]
    context.myFunc = this;
    context.myFunc(...args);
}
buyCar.myCall(car, 3000000, 'Sports');