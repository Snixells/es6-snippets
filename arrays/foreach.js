// Simple foreach loop
let colors = ['red', 'blue', 'green']
colors.forEach(color => {
    console.log(color);
});


// Adding numbers => anonymus function
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(number => {
    sum += number
});
console.log(sum)


// Adding numbers => predefined function
const adder = (number) => {
    sum += number;
}
numbers.forEach(adder)
console.log(sum)