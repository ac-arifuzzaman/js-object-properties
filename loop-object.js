const bottle = { color: 'yellow', height: 3.3, price: 50, made: 'bangladesh' }

for (const prop in bottle) {
    // console.log(prop, bottle[prop])
}

const botal = Object.keys(bottle);
// console.log(botal)
for (const maan of botal) {
    console.log(maan, bottle[maan]);
};