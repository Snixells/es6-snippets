let numbers = [1, 2, 3];
let doubledNumbers = numbers.map((number) => {
    return number * 2;
})
console.log(doubledNumbers)


let cars = [
    { model: 'BMW', price: 'expensive' },
    { model: 'Fiat', price: 'cheap' }
];
let prices = cars.map((car) => {
    return car.price
})
console.log(prices)