function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if (drink === 'coffee') {
            resolve("Order for coffee placed.")
        } else{
            reject("Order cannot be placed.")
        }
    })
}
function processOrder(orderPlaced) {
    return new Promise(function(resolve, reject){
        resolve(`${orderPlaced} and served to customer!`)
    })
}
function generateBill(processedOrder) {
    return new Promise(function(resolve, reject){
        resolve(`${processedOrder} and bill generated for 100 rupees.`)
    })
}
//using Promise chaining
// placeOrder("coffee")
//     .then(function(orderStatus){
//         console.log(orderStatus);
//         return orderStatus
//     })
//     .then(function(orderStatus){
//         let isOrderProcessed = processOrder(orderStatus)
//         console.log(isOrderProcessed);
//         return isOrderProcessed
//     })
//     .then(function(orderIsProcessed){
//         console.log(orderIsProcessed)
//         return orderIsProcessed
//     })
//     .then(function(orderIsProcessed){
//         let isBillgenerated = generateBill(orderIsProcessed);
//         console.log(isBillgenerated)
//         return isBillgenerated
//     })
//     .then(function(billGenerated){  
//         console.log(billGenerated)
//     })
//     .catch(function(err){
//         console.log(err)
//     })
/**
 * Output:
 * Order for coffee placed.
Promise { 'Order for coffee placed. and served to customer!' }
Order for coffee placed. and served to customer!
Promise {
  'Order for coffee placed. and served to customer! and bill generated for 100 rupees.'
}
Order for coffee placed. and served to customer! and bill generated for 100 rupees.
 */

// using async await.
// wrap async await in try catch block.
async function serveOrder() {
    try {
        let orderStatus = await placeOrder('coffee')
        let processedOrder = await processOrder(orderStatus)
        let generatedBill = await generateBill(processedOrder)
        console.log('3rd await', generatedBill)
    }
    catch(error){
        console.log(error)
    }
}

serveOrder()
/**
 * Output:
 * 3rd await Order for coffee placed. and served to customer! and bill generated for 100 rupees.
 */