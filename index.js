// Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
//   If the number is divisible by 3, print 'Fizz'.
//   If the number is divisible by 5, print 'Buzz'.
//   If the number is divisible by 3 AND 5, print 'FizzBuzz'.
//   If the number is not divisible by 3 or 5, print 'Pop'.
//
    
function fizzBuzz (numInput) {
    let result = "";
    if (numInput % 3 === 0) {
        result = "Fizz";
    }
    if (numInput % 5 === 0) {
        result = result + "Buzz";
    } else if (result === "") {
        result = "Pop";
    }
    return result;
}
console.log(`49=${fizzBuzz(49)}`);
console.log(`55=${fizzBuzz(55)}`);
console.log(`120=${fizzBuzz(120)}`);
console.log(`9999=${fizzBuzz(9999)}`);

//Use the following test scenarios:
//fizzBuzz(49); //Pop
//fizzBuzz(55); //Buzz
//fizzBuzz(120); //FizzBuzz
//fizzBuzz(9999); //Fizz


// Q2. Create a function called averager that gets the average of an array.
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];

function averager(arrayIn) {
    let sum = 0;
    let avgResult = 0;
    for (indexer in arrayIn) {
        sum += arrayIn[indexer];
    }
    avgResult = sum/arrayIn.length;
    return avgResult;
}

let result = averager(prices);
console.log(`Average of prices array = ${result}`);


// Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 
//Note Celsius to Kelvin = C + 273.15
//Celsius to Fahrenheit = F = (C*9/5) + 32

function celToFah(celsius){
    let result = (celsius * 9/5) + 32;
    return result;
}

function celToKel(celsius){
    let result = celsius + 273.15;
    return result;
}

console.log(`37.5 Celsius = ${celToFah(37.5)} Fahrenheit`);
console.log(`-40 Celsius = ${celToFah(-40)} Fahrenheit`);
console.log(`0 Celsius = ${celToFah(0)} Fahrenheit`);
console.log(`100 Celsius = ${celToFah(100)} Fahrenheit`);
console.log(`173.13 Celsius = ${celToKel(173.13)} Kelvin`);
console.log(`-13 Celsius = ${celToKel(-13)} Kelvin`);

// Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
//pow(2, 3) -> 2 * 2 * 2 -> 8
//Note: You can not use Math.pow function. You need to write your own implementation of the function.

function myPower(baseNumber, numberRaisedTo) {
    //setting up some working variables for base and exponent because they might need adjustment...
    let workingBase = baseNumber;
    let workingExponent = numberRaisedTo;
    //Researching how negative powers are calculated, we need to transform the base 
    //and exponent a bit if the exponent is negative...
    if (numberRaisedTo < 0) {
        //if the exponent is negative, need to change our base to one over the base...
        workingBase = 1/baseNumber;
        //Get the positive exponent value by multiplying it by -1.
        workingExponent = -1 * numberRaisedTo;
        //now we can calculate the power with the adjusted working base and exponent as normal..
    }
    let result = 1;
    for (let i = 0; i < workingExponent; i++) {
        result *= workingBase;
    }
    return result;
}
console.log(`2 to the power of 3 = ${myPower(2,3)}; builtin = ${Math.pow(2,3)}`);
console.log(`2 to the power of 5 = ${myPower(2,5)}; builtin = ${Math.pow(2,5)}`);
console.log(`2 to the power of 10 = ${myPower(2,10)}; builtin = ${Math.pow(2,10)}`);
console.log(`2 to the power of 0 = ${myPower(2,0)}; builtin = ${Math.pow(2,0)}`);
console.log(`5 to the power of 10 = ${myPower(5,10)}; builtin = ${Math.pow(5,10)}`);
console.log(`5 to the power of -2 = ${myPower(5,-2)}; builtin = ${Math.pow(5,-2)}`);
console.log(`Assuming the differences above are rounding error...`);