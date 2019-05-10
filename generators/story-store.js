function* shopping() {
    // stuff on sidewalk

    // walking down the sidewalk
    // go into the store with cash
    const stuffFromStore = yield 'cash';

    // walking back home
    return stuffFromStore
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // Leaving our house
// walking into the store
// purchasing our stuff
console.log(gen.next('groceries')); // Leaving the store with groceries