// this keyword in node.js - non-strict mode

// Scenario 1: Global context
console.log("Scenario 1: ");
console.log(this); // Output: {}

//Scenario 2: Function in global context
console.log("Scenario 2: ");
function fnGlobal() {
    console.log(this); // Output: Object [global]
}
fnGlobal();

// Scenario 3: Method in an object
console.log("Scenario 3: ");
var obj = {
    a: 1,
    fn: function () {
        console.log(this); // Output: { a: 1, fn: [Function: fn] } 
    }
}
obj.fn();

// Scenario 4: nested function in an object method
console.log("Scenario 4: ");
var obj2 = {
    fn: function () {
        console.log("nested1",this); // Output: { fn: [Function: fn] }
        var nestedFn = function () {
            console.log("nested2", this); // Output: Object [global]
        }
        nestedFn();
    }
}
obj2.fn();