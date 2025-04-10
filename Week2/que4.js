let numArray = [];

for (let i = 1; i <= 5; i++) {
    numArray.push(i);
}

console.log("Numbers from 1 to 5:", numArray);

// 5: Function to return square of a number
function square(number) {
    return number * number;
}

let input = 6;
let squared = square(input);

console.log("Square of", input, "is", squared);