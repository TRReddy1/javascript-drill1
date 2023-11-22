const inventory = require('../inventory');
const lastCar = require('../problem2');

const result = lastCar(inventory);

console.log(`Last car is a ${result.car_make} ${result.car_model}`);
