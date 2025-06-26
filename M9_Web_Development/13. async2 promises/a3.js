function promiseSum(a, b) {
    // Write Code Here =============
    return new Promise((res,rej) => {
       if(a>0 && b>0){
           res(a+b)
       }
       else{
           rej("Both numbers must be positive")
             
       } 
   })

}