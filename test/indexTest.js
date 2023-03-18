require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      const num1 = 31;
      const num2 = 2;
      const multiply = num1 * num2;
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply).to.eq(62)
    });
  });
  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      const random = Math.floor(Math.random() * 100) + 1;
      expect(Number.isInteger(random)).to.be.true
      expect(random).to.not.eq(0)
    });
  });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      const num3 = 14;
      const num4 = 5;
      const mod = num3 % num4;
      expect(num3).to.be.a('number')
      expect(num4).to.be.a('number')
      expect(mod).to.eq(4)
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      const max = Math.max(1, 5, 8, 20);
      expect(max).to.eq(20)
    });
  });
});
