// var a = 20;
// function parent() {
//     console.log(a); // 20
// }
// parent();

// function parent() {
//     function child() {
//         console.log(a);
//         function grandchild() {
//             var a = 20;
//             console.log(a);
//         }
//         grandchild()
//     }
//     child()
// }
// parent();


// let. const block scoped.


// function fun() {
//     if (true) {
//         let blockScoped = "inside if";
//         console.log(blockScoped)
//     }
//     console.log(blockScoped);
//     //ReferenceError: blockScoped is not defined
// }
// fun()

// let val = "outsde fun"
// function fun() {
//     let val = "outside if"
//     if (true) {
//         let val = "inside if";
//         console.log(val)
//     }
//     console.log(val);
// }
// fun()
// console.log(val);


// CLOSURES::
// function grandMa() {
//     const secret = 'Maggi Masala'
//     function girl() {
//         console.log("i know the secret", secret)
//     }
//     girl()
// }
// grandMa();

// return function from closure

function grandMa() {
    console.log('grandMa fn called')
    const secret = 'Maggi Masala'
    function girl() {
        console.log("i know the secret", secret)
    }

    return girl;
}

const recipe = grandMa();
// reciope variable is nothng but girl functuon,

recipe()

