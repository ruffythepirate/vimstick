const cut = require('../../src/app/input/keyParser.js');
const chai = require('chai');
const expect = chai.expect;


describe('keyParser.createKeyArray', function () {
  it('return empty array for empty string', function () {
      const result = cut.createKeyArray('');
      expect(result).to.deep.equal([]);
  });
});