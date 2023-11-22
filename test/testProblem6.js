const inventory = require("../inventory");
const specifiedCars = require("../problem6");

let instrested = ["BMW", "Audi"];

const result = specifiedCars(inventory, instrested);

console.log(JSON.stringify(result));

