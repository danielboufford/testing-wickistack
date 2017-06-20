var expect = require("chai").expect;
//var expect = require('mocha').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

console.log("this is stupid!");

function sum(a, b) {
  return a + b;
}

describe("sum function", function() {
  it("sums two numbers", function() {
    expect(sum(2, 3)).to.equal(5);
  });
});

describe("setTimeout function", function() {
  it("confirms setTimeout's timer accuracy", function(done) {
    var start = new Date();
    setTimeout(function() {
      var duration = new Date() - start;
      expect(duration).to.be.closeTo(1000, 50);
      done();
    }, 1000);
  });
});

describe("check if forEach ran on each element", function() {
  it("confirms that it ran", function() {
    var testArray = [1, 2, 3];

    function doubler(x)
		{
			return x * 2;
		}

console.log("before " , doubler)
doubler = chai.spy(doubler)
testArray.forEach(doubler)


expect(doubler).to.have.been.called.exactly(testArray.length);
console.log("after ", doubler)

console.log("3 doubled " ,doubler(3));
console.log("after 2 ", doubler)


  });
});
