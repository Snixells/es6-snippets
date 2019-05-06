// -- Example 1 -----------------------
let numbers = [10, 20, 30];
let sum = 0;

sum = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log(sum);



// -- Example 2 -----------------------
let primaryColors = [
    { color: "red" },
    { color: "yellow" },
    { color: "blue" }
];

accColors = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color)
    return previous
}, [])

console.log(accColors);



// -- Example 3 -----------------------
const balancedParentesis = (string) => {
    return string.split("").reduce((previous, char) => {
        console.log(char)
        if (previous < 0) { return previous }
        if (char == "(") { return ++previous; }
        if (char == ")") { return --previous; }
        return previous
    }, 0)
}

console.log(balancedParentesis("()())("));