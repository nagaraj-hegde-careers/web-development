const exchangeRates = {
    'USD': 1.0,
    'EUR': 0.85,
    'GBP': 0.75,
};

function convertCurrency(amount, sourceCurrency, targetCurrency) {
    // Write code here =========
    
    return new Promise((res, rej)=>{
        if(exchangeRates.hasOwnProperty(sourceCurrency) && targetCurrency in exchangeRates){
            res((amount*exchangeRates[sourceCurrency]*exchangeRates[targetCurrency]).toFixed(2))
        }
        else{
            rej("Error converting currency: Invalid currency")
        }
    })
}