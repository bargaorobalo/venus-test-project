/**
 * @venus-library mocha
 */
describe('First unit test using venus.js', function() {
  it('Gives us the ability to run test from the command line', function() {
    expect(2 + 2).to.be(4);
  });
});

describe('Second unit test using venus.js', function() {
  it('OK, running on command line', function() {
    expect(2 + 3).to.be(5);
  });
});