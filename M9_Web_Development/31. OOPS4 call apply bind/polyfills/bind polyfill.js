let car = {
    name: "Mercedes Benz",
    color: "black"
}
function buyCar(price, type) {
    console.log(`${this.color} "${this.name}" ${type} car costs ${price}.`)
}

const myBuyCar = buyCar.bind(car, 3000000);
myBuyCar('Sports');

// creating our own bind polyfill
Function.prototype.myBind = function (context, ...boundArgs) {
    if (typeof this !== 'function') {
        throw new Error(this, " should be a function.")
    }
    const targetFunction = this;
    return function (...args) {
        // console.log("this is nested return function", this)
        return targetFunction.apply(context, [...boundArgs, ...args])
    }
}
const myBuyCar2 = buyCar.myBind(car, 2000000);
myBuyCar2('Eco');