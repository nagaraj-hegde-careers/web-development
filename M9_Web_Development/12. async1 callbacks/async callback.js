//*----------x----------x----------x----------x----------x----------*//
//Synchronus program example 1
// const task1 = () => {
//     console.log('Task 1');
// }
// const task2 = () => {
//     console.log('Task 2');
// }
// task1();
// task2();

//*----------x----------x----------x----------x----------x----------*//
//blocking nature of synchronous program example 1
// const task1 = () => {
//     console.log('Task 1');
// }
// const heavyTask = () => {
//     console.log('Heavy Task started in synchronous manner');
//     const start = Date.now();// epoch time
//     while (Date.now() - start < 3000) {
//         // do nothing
//     }
//     console.log('Heavy Task done');
// }
// const task2 = () => {
//     console.log('Task 2');
// }
// task1();
// heavyTask();
// task2();

//*----------x----------x----------x----------x----------x----------*//
//asynchronous(non-blocking) programming example 1
// const task1 = () => {
//     console.log('Task 1');
// } 
// const heavyTaskNonBlocking = () => {
//     console.log('async Task skipping it for now');
//     setTimeout(() => {
//         console.log('Async Task done');
//     }, 3000);
// }
// const task2 = () => {
//     console.log('Task 2');
// }
// task1();
// heavyTaskNonBlocking();
// task2();

//*----------x----------x----------x----------x----------x----------*//
//blocking nature of the code example 1
// const data = []
// const fetchResponseBlocking = () => {
//     console.log("making a synchronous api call ")
//     // mimicking an api call
//     const start = Date.now();
//     while (Date.now() - start < 3000) {
//         // do nothing
//     }
//     console.log("api call done")
//     data.push({ id: 1, name: 'John' })
// }
// const renderResponse = () => {
// console.log("rendering the response")
// console.log(data[0].name)
// }
// fetchResponseBlocking()
// renderResponse()

//making the example 1 asynchronous (error if the results from timeout is not arrived)
// const data = []
// const fetchResponseNonBlocking = () => {
//     console.log("making a synchronous api call ")
//     // mimicking an api call
//     setTimeout(() => {
//         console.log("api call done")
//         data.push({ id: 1, name: 'John' })
//     },5000)
// }
// const renderResponse = () => {
//     console.log("rendering the response")
//     console.log(data[0].name) //throwsTypeError: Cannot read properties of undefined (reading 'name')
// }
// fetchResponseNonBlocking()
// renderResponse()

//using callback to work around the above problem
const data = []
const task1 = () => {
    console.log('Task 1',Date.now());
}
const fetchResponseNonBlockingCallback = (render) => {
    console.log("making an asynchronous api call",Date.now())
    // mimicking an api call
    setTimeout(() => {
        console.log("api call done",Date.now())
        data.push({ id: 1, name: 'John' })
        render()// callback added here
        console.log("setTimeout completed",Date.now())
    },5000)
    
}
const renderResponse = () => {
    console.log("rendering the response",Date.now())
    console.log(data[0].name,Date.now())
}
const task2 = () => {
    console.log("Task 2",Date.now());
}
task1()
fetchResponseNonBlockingCallback(renderResponse)
task2()