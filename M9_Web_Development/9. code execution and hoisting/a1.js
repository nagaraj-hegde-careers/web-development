function main(str){

    let vowels=['a','e','i','o','u'];
    let vowelCount=0;
    
    for (let i=0 ; i < str.length ; i++){
        let char= str[i].toLowerCase();
        
        if(vowels.includes(char)){
            vowelCount++;
        }

    }
    return vowelCount;
}
console.log(main("Hello World")); // Output: 3