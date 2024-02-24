let oneEuroIs = {
    "JPY": 156.5, //japan yen
    "USD": 1.07, //us dollar
    "GBP": 0.87, //british pound
};


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

console.log("fromEuroToDollar: " + "USD " + fromEuroToDollar(1));

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / 1.07 * 156.5;
    return valueInYen;
}

console.log("fromDollarToYen: " + "JPY " + fromDollarToYen(2));

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen / 156.5 * 0.87;
    return valueInPound;
}

console.log("fromYenToPound: " + "GBP " + fromYenToPound(3));

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

//encuentro este tipo de función más dinámica
//function fromEuroToDollar(amount) {
//    let euroToDollarRate = oneEuroIs["USD"];
//    return amount * euroToDollarRate;
//}

//console.log("fromEuroToDollar: " + "USD " + fromEuroToDollar(1));

//function fromDollarToYen(amount) {
//    const dollarToYenRate = 1 / oneEuroIs["USD"] * oneEuroIs["JPY"];
//    return amount * dollarToYenRate;
//}

//console.log("fromDollarToYen: "  + "JPY " + fromDollarToYen(1));

//function fromYenToPound(amount) {
//    const yenToPoundRate = 1 / oneEuroIs["JPY"] * oneEuroIs["GBP"]; 
//    return amount * yenToPoundRate;
//}

//console.log("fromYenToPound: " + "GBP " + fromYenToPound(1));
