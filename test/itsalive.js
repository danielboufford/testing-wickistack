var expect = require('chai').expect;
//var expect = require('mocha').expect;

console.log("this is stupid!");

function sum(a,b) {
	return a+b;
}

describe("sum function", function(){
	it("sums two numbers", function(){
		expect(sum(2,3)).to.equal(5);
	})
})

describe("setTimeout function", function(){
	it('confirms setTimeout\'s timer accuracy', function (done) {
	  var start = new Date();
	  setTimeout(function () {
	    var duration = new Date() - start;
	    expect(duration).to.be.closeTo(1000, 50);
	    done();
	  }, 1000);
	});
})

