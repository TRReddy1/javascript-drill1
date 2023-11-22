// ==== Problem #5 ====
/* The car lot manager needs to find out how many cars are older than the year 2000.
 Using the array you just obtained from the previous problem, 
 find out how many cars were made before the year 2000 and return the array of older cars and log its length. */

function olderCars(inventory, carsYears, year) {
  let carsOlder = [];

  for (let i = 0; i < carsYears.length; i++) {
    if (carsYears[i] < year) {
      carsOlder.push(inventory[i]);
    }
  }
  return carsOlder;
}
module.exports = olderCars;

