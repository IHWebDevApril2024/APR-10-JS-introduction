const number = 25.643643643; // decimals with dots, not comas

const roundedNumber = Math.round(number);

console.log(roundedNumber);

const onlyTwoDecimals = number.toFixed(0);

console.log(onlyTwoDecimals);

const hugeNumber = 3e99999999;

console.log(hugeNumber);

// FLOOR AND CEIL

const price = 100.99

console.log(Math.floor(price));


// RANDOM NUMBER

// EXTRA STUFF
for (let i=1; i<=100; i++){ 
    
    const randomNumber = Math.ceil(Math.random() *6); // roll the dice! 
    
    console.log("Random number: ",randomNumber);
    
}