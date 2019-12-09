/*Dec 4, 2019
  Frederick Lee

  https://web.compass.lighthouselabs.ca/days/w01d5/activities/336

  - For every two empty bottles, you can get one free (full) bottle of pop
  - For every four bottle caps, you can get one free (full) bottle of pop
  - Each bottle of pop costs $2 to purchase

  Given the above parameters, write a program so that you can figure out how many total
  bottles of pop can be redeemed given a customer investment.

  Investment 	Total Bottles
  10 	        15
  20 	        35
  30 	        55
  40 	        75
*/

const assert = require('chai').assert;
const calcBottles = require('../calcBottles');

describe("#calcBottles()", () => {
  it("should return 15 bottles for $10 investment", () => {
    assert.equal(calcBottles(10), 15);
  });
  it("should return 35 bottles for $20 investment", () => {
    assert.equal(calcBottles(20), 35);
  });
  it("should return 55 bottles for $30 investment", () => {
    assert.equal(calcBottles(30), 55);
  });
  it("should return 75 bottles for $40 investment", () => {
    assert.equal(calcBottles(40), 75);
  });
});