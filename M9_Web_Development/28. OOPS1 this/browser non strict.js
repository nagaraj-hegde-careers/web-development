// this keyword in browser - non-strict mode

// Scenario 1: Global context
console.log("Scenario 1: ");
console.log(this); // Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//Scenario 2: Function in global context
console.log("Scenario 2: ");
function fnGlobal() {
    console.log(this); // Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}
fnGlobal();

// Scenario 3: Method in an object
console.log("Scenario 3: ");
var obj = {
    a: 1,
    fn: function () {
        console.log(this); // Output: {a: 1, fn: ƒ} 
        console.log(this.a); // 1
    }
}
obj.fn();

// Scenario 4: nested function in an object method
console.log("Scenario 4: ");
var obj2 = {
    fn: function () {
        console.log("nested1",this); // Output: {fn: ƒ}
        var nestedFn = function () {
            console.log("nested2", this); // Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        }
        nestedFn();
    }
}
obj2.fn();