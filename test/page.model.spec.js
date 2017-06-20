var models = require("../models");
var Page = models.Page;
var expect = require("chai").expect;
//var expect = require('mocha').expect;
var chai = require("chai");
var spies = require("chai-spies");

describe("the page model", function() {
  var page;

  beforeEach(function() {
    page = Page.build();
  });

  describe("The urlTitle should begin with /wiki/", function() {
    it("the value returned should start with /wiki/", function() {
      page.urlTitle = "test";
      page.title = "test";
      page.content = "test";

      expect(page.route).to.equal("/wiki/test");
    });
  });

  describe("The renderedContent function returns a markdown", function() {
    it("the value returned should be of type marked", function() {
      page.content = "This is a test content";
      //console.log()
      expect(page.renderedContent).to.equal("<p>This is a test content</p>\n");
    });
  });
});

describe("testing the class methods", function() {
  var page;

  beforeEach(function(done) {
    Page.create({
      title: "foo",
      content: "bar",
      tags: ["foo", "bar"]
    })
      .then(function() {
        done();
      })
      .catch(done);
  });

  it("The findByTag method accepts a string and returns an array", function(
    done
  ) {
    //console.log("tags ", page.findByTag);
    Page.findByTag("bar")
      .then(function(resolve) {
        expect(resolve).to.be.a("Array");
        done();
      })
      .catch(done);
  });

  it("The findByTag method accepts a an Array and returns an array", function(
    done
  ) {
    //console.log("tags ", page.findByTag);
    Page.findByTag(["foo", "bar"])
      .then(function(resolve) {
        expect(resolve).to.be.a("Array");
        done();
      })
      .catch(done);
  });

  it("The findByTag method accepts a string and returns an array", function(
    done
  ) {
    //console.log("tags ", page.findByTag);
    Page.findByTag("x")
      .then(function(resolve) {
        expect(resolve).to.have.a.lengthOf(0);
        done();
      })
      .catch(done);
  });
});

describe("testing the instance methods", function() {
  var page;

  beforeEach(function(done) {
    var foo = new Models.Page();
    var sid = new Models.Page();
    var dan = new Mode();

    var foo = Page.create({});

    var sid = Page.create({});

    var dan = Page.create({});


Promise.all([foo,sid,dan]).then(function(resolve){


}).catch(funtion(reject)
{
    done(reject);
})
    foo
      .create({
        title: "foo",
        content: "bar",
        tags: ["foo", "bar"]
      })
      .then(function() {
        done();
      })
      .catch(done);

    sid
      .create({
        title: "sid",
        content: "this is something about sid",
        tags: ["peer", "bar"]
      })
      .then(function() {
        done();
      })
      .catch(done);

    dan
      .create({
        title: "daniel",
        content: "this is something about daniel",
        tags: ["peer", "dan"]
      })
      .then(function() {
        done();
      })
      .catch(done);
  });

  it("The findSimilar method accepts a string and returns an array", function(
    done
  ) {
    // Page.findSimilar().then(function(resolve) {
    //     expect(resolve).to.have.a.lengthOf(0);
    //     done();
    //   })
    //   .catch(done);

    console.log("find similar ", Page.findSimilar);

    done();
  });
});
