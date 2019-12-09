/*Dec 4, 2019
  Frederick Lee

  - For every two empty bottles, you can get one free (full) bottle of pop
  - For every four bottle caps, you can get one free (full) bottle of pop
  - Each bottle of pop costs $2 to purchase

  Given the above parameters, write a program so that you can figure out how many total
  bottles of pop can be redeemed given a customer investment.

  Task 2
  Have your program accept an argument (argv) that will allow the user to specify the amount
  (in dollars) that the customer is going to spend. The node script will then calculate the
  total number of bottles that the customer will receive.

  Task 3
  Enhance the output of your program so that once the amount has been given, it provides a breakdown
  of how many bottles were purchased, how many were obtained through bottle recycling, and how many
  were obtained through bottle cap recycling.

  Sample:
  Total Bottles: 75
  Total Earned:
    Bottles: 37
    Caps: 18

*/

// caculates the number of bottles you can get from an initial dollar investment
const calcBottles = (investment, caps = 0, emptyBottles = 0) => {
  // constants defined in the problem
  const dollarPerBottle = 2;
  const capsPerBottle = 4;
  const emptyPerFull = 2;

  let total = {
    bottles: 0,
    fromCaps: 0,
    fromEmpties: 0,
  }

  if (investment < dollarPerBottle && caps < capsPerBottle && emptyBottles < emptyPerFull) {
    // base case. can't get any more full bottles.
    return total;
  }

  const fullBottlesFromCaps = Math.floor(caps / capsPerBottle);
  const fullBottlesFromEmpties = Math.floor(emptyBottles / emptyPerFull);
  const fullBottles = 
    Math.floor(investment / dollarPerBottle) +
    fullBottlesFromCaps +
    fullBottlesFromEmpties;
  const remainingCaps = fullBottles + caps % capsPerBottle;
  const remainingEmptyBottles = fullBottles + emptyBottles % emptyPerFull;

  total.bottles += fullBottles;
  total.fromCaps += fullBottlesFromCaps;
  total.fromEmpties += fullBottlesFromEmpties;

  const bottlesFromRecycling = calcBottles(
    investment % dollarPerBottle,
    remainingCaps,
    remainingEmptyBottles);
  for (key of Object.keys(bottlesFromRecycling)) {
    total[key] += bottlesFromRecycling[key];
  }

  return total;
};

module.exports = calcBottles;

const initialInvestment = ([...process.argv].slice(2) | 0);
const totalBottles = calcBottles(initialInvestment);

console.log(
  `With $${initialInvestment}, you will get:
  Total Bottles: ${totalBottles.bottles}
  Total Earned Through:
    Empty Bottles: ${totalBottles.fromEmpties}
    Caps: ${totalBottles.fromCaps}`
);
