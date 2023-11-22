const inventory = require("../inventory");
const carYearsData = require("../problem4");
const olderCars = require("../problem5");

const carLists = carYearsData(inventory);
const result = olderCars(inventory, carLists, 2000);

console.log(result);
console.log(result.length);

