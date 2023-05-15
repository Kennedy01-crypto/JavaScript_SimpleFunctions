//program to output the random numbers in a given range inclusive of both maximum and minimum
let rangeStart = prompt("Enter lowest number;")
let rangeEnd = prompt("Enter largest number;")

function randomNumRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
console.log(randomNumRange(rangeStart,rangeEnd));
