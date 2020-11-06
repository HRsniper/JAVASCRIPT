const assert = require("assert");
const expect = require("chai").expect;
const sinon = require("sinon");

const Math = require("../src/math.js");

describe("math class", function () {
  it("sum 2 numbers", function () {
    const math = new Math();

    assert.strictEqual(math.sum(5, 5), 10);
  });

  it("sum 2 numbers async", function (done) {
    const math = new Math();

    this.timeout(3000);

    math.sumAsync(5, 5, (value) => {
      assert.strictEqual(value, 10);
      done();
    });
  });

  it("multiply 2 numbers");

  it("sum 2 numbers with chai", function () {
    const math = new Math();

    expect(math.sum(5, 5)).to.equal(10);
  });

  it("expect property to obj", function () {
    const obj = {
      name: "nome",
    };

    expect(obj).to.have.property("name");
    expect(obj).to.have.property("name").equal("nome");
  });

  it("call res with sum and index", function () {
    const req = {};
    const res = {
      load: sinon.spy(),
    };
    const math = new Math();

    math.print(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;
  });
});
