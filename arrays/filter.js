// -- Example 1 -----------------------
let products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 5 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 54 },
    { name: 'orange', type: 'fruit', quantity: 30, price: 15 },
    { name: 'chocolate', type: 'sweets', quantity: 25, price: 7 }
]

let filteredProductsOneArg = products.filter((product) => {
    return product.type === 'fruit'
})
console.log(filteredProductsOneArg);


// -- Example 2 -----------------------
let filteredProducts = products.filter((product) => {
    return product.type === 'fruit'
        && product.quantity > 0
        && product.price < 30
})
console.log(filteredProducts)