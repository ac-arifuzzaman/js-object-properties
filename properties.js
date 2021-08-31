const bottle = { color: 'yellow', height: 3.3, price: 50, made: 'bangladesh' }
const keys = Object.keys(bottle);
// console.log(keys)
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair)
// const freez = Object.freeze(bottle)
const seel = Object.seal(bottle)
bottle.built = 'plastic';
delete bottle.price;
console.log(bottle)