/*Dec 4, 2019
  Frederick Lee

  - For every two empty bottles, you can get one free (full) bottle of pop
  - For every four bottle caps, you can get one free (full) bottle of pop
  - Each bottle of pop costs $2 to purchase

  Given the above parameters, write a program so that you can figure out how many total
  bottles of pop can be redeemed given a customer investment.
*/

// caculates the number of bottles you can get from an initial dollar investment
const calcBottles = (investment, caps = 0, emptyBottles = 0) => {
  // constants defined in the problem
  const dollarPerBottle = 2;
  const capsPerBottle = 4;
  const emptyPerFull = 2;

  let totalBottles = 0;

  if (investment < dollarPerBottle && caps < capsPerBottle && emptyBottles < emptyPerFull) {
    // base case. can't get any more full bottles.
    return 0;
  }

  const fullBottles = 
    Math.floor(investment / dollarPerBottle) +
    Math.floor(caps / capsPerBottle) + 
    Math.floor(emptyBottles / emptyPerFull);
  const remainingCaps = fullBottles + caps % capsPerBottle;
  const remainingEmptyBottles = fullBottles + emptyBottles % emptyPerFull;

  totalBottles += fullBottles + calcBottles(investment % dollarPerBottle, remainingCaps, remainingEmptyBottles);

  return totalBottles;
};

module.exports = calcBottles;