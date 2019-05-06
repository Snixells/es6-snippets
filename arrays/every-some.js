// -- Example 1 -----------------------
let computers = [
    { name: 'Mac', ram: 2 },
    { name: 'Surface', ram: 32 },
    { name: 'Desktop', ram: 64 }
];

let canEveryComputerRunProgram = computers.every((computer) => {
    return computer.ram > 16
})

let canOnlySomeComputersRunProgram = computers.some((computer) => {
    return computer.ram > 16
})

console.log(canEveryComputerRunProgram);
console.log(canOnlySomeComputersRunProgram);
