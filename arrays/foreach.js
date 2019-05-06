// Simple foreach loop
var colors = ['red', 'blue', 'green']
colors.forEach(color => {
    console.log(color);
});


// Adding numbers => anonymus function
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
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



var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
];


posts.forEach(post => {
    console.log(post)
})