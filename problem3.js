// ==== Problem #3 ====
/* The marketing team wants the car models listed alphabetically on the website.
 Execute a function to Sort all the car model names into alphabetical order and 
 log the results in the console as it was returned. */

function sortByModel(cars) {
  let sorted = [];

  for (let i = 0; i < cars.length; i++) {
    sorted.push(cars[i].car_model);
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].toLowerCase() > sorted[j + 1].toLowerCase()) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  return sorted;
}

module.exports = sortByModel;
