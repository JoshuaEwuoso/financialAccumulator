const bitcoinTrades = require("./data/bitcoinTrades.json");
const etheriumTrades = require("./data/etheriumTrades.json");
const currencies = require("./data/currencies.json");

// Use the bitcoinTrades, etheriumTrades, and currencies variables above to solve these.
// Round to two decimal places.

// Issue: toFixed returns a string, so we have to convert it back to a number.
// This is a helper function that rounds to two decimal places and converts that string back to a number.
function roundNum(num) {
    return Number(num.toFixed(2))
}

console.log(roundNum(3.1415));
// >> 3.14
console.log(roundNum(3.145));
// >> 3.15
console.log(typeof roundNum(3.1415))
// >> 'number'

// Find the total price of all trades.
function findTotalPrice(trades) {
let total = 0;
    for (let i = 0; i < trades.length; i++) {
       let trade = trades[i]
        total = total + Number(trade.price)
    }
    return roundNum(total)
}

console.log(findTotalPrice(bitcoinTrades));
// >> 41815183.19

// Find the highest price of all trades.
function findHighestPrice(trades) {
let highest = 0;
let arrPrice = [];
    for (let i = 0; i < trades.length; i++) {
       let trade = trades[i]
        arrPrice.push(trade.price)
    }
    highest = Math.max(...arrPrice)
    return roundNum(highest)
}

console.log(findHighestPrice(bitcoinTrades));
// >> 41850.03

// Find the average price of all trades.
function findAveragePrice(trades) {
let average;
let total = 0;
    for (let i = 0; i < trades.length; i++) {
       let trade = trades[i].price
        total += Number(trade)
    }
    average = total / trades.length
    return roundNum(average)
}

console.log(findAveragePrice(bitcoinTrades));
// >> 41815.18

// Find the lowest price of all trades.
function findLowestPrice(trades) {
let lowest = 0;
let arrPrice = [];
    for (let i = 0; i < trades.length; i++) {
        let trade = trades[i]
        arrPrice.push(trade.price)
    }
    lowest = Math.min(...arrPrice)
    return roundNum(lowest)
}

console.log(findLowestPrice(bitcoinTrades));
// >> 41781.9

// Find the total size of all trades.
function findTotalSize(trades) {
let total = 0;
    for (let i = 0; i < trades.length; i++) {
        let trade = trades[i]
        total += Number(trade.size)
    }
    return roundNum(total)
}

console.log(findTotalSize(bitcoinTrades));
// >> 106.58

// Find the highest size of all trades.
function findHighestSize(trades) {
let highest = 0;
let arrSize = [];
    for (let i = 0; i < trades.length; i++) {
       let trade = trades[i]
        arrSize.push(trade.size)
    }
    highest = Math.max(...arrSize)
    return roundNum(highest)
}

console.log(findHighestSize(bitcoinTrades));
// >> 2.34

// Find the average size of all trades.
function findAverageSize(trades) {
let average;
let total = 0;
    for (let i = 0; i < trades.length; i++) {
       let trade = trades[i].size
        total += Number(trade)
    }
    average = total / trades.length
    return roundNum(average)
}

console.log(findAverageSize(bitcoinTrades));
// >> 0.11

// Find the lowest size of all trades.
function findLowestSize(trades) {
let lowest = 0;
let arrSize = [];
    for (let i = 0; i < trades.length; i++) {
        let trade = trades[i]
        arrSize.push(trade.size)
    }
    lowest = Math.min(...arrSize)
    return roundNum(lowest)
}

console.log(findLowestSize(bitcoinTrades));
// >> 0

// Filter the trades by trade type i.e. buy/sell. If type is not provided do not filter. If type is an invalid input return an empty array.
function getTradeType(trades, type) {
let tradeType = [];
    for (let i = 0; i < trades.length; i++) {
        let trade = trades[i]
        if (trade.side === type) {
            tradeType.push(trade)
        }
    }
    return tradeType
}

console.log(getTradeType(bitcoinTrades, 'buy'));
// >> [
//      {
//        "time": "2021-08-06T15:50:36.4683Z",
//        "trade_id": 199703070,
//        "price": "41844.06000000",
//        "size": "0.00228569",
//        "side": "buy"
//      },
//      {
//        "time": "2021-08-06T15:50:34.130059Z",
//        "trade_id": 199703067,
//        "price": "41832.44000000",
//        "size": "0.00101132",
//        "side": "buy"
//      },
//        "time": "2021-08-06T15:50:33.547084Z",
//        "trade_id": 199703045,
//        "price": "41831.01000000",
//        "size": "0.03739041",
//        "side": "buy"
//      },
//      ...
// ]

// Get all the info (total price, average size, etc.) of all trades.
function getFullInfo(trades) {
return {
    totalPrice: findTotalPrice(trades),
    totalSize: findTotalSize(trades),
    averagePrice: findAveragePrice(trades),
    averageSize: findAverageSize(trades),
    highestPrice: findHighestPrice(trades),
    lowestPrice: findLowestPrice(trades),
    highestSize: findHighestSize(trades),
    lowestSize: findLowestSize(trades),
    }
}

// console.log(getFullInfo(bitcoinTrades));
// >> {
//     totalPrice: 41815183.19,
//     totalSize: 106.58,
//     averagePrice: 41815.18,
//     averageSize: 0.11,
//     highestPrice: 41850.03,
//     lowestPrice: 41781.9,
//     highestSize: 2.34,
//     lowestSize: 0
// }

// Return an object that contains the currency type as the key and an array of names/types strings as the value. See return example below for formatting.
function categorizeCurrencies(currencies) {
let currObj = {};
    for (let i = 0; i < currencies.length; i++) {
       let currency = currencies[i];
       if (!currObj[currency.details.type]) {
           currObj[currency.details.type] = []
        } 
            currObj[currency.details.type].push(`${currency.name}(${currency.id})`)
    }
    return currObj
}

// console.log(categorizeCurrencies(currencies));
// {
//     crypto: [
//       'Dash(DASH)',
//       'Orchid(OXT)',
//       'Cosmos(ATOM)',
//       ...
//     ],
//     fiat: [
//       'British Pound(GBP)',
//       'United States Dollar(USD)',
//       ...
//     ]
// }
