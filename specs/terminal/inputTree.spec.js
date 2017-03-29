const cut = require('../../src/app/input/inputTree.js');

const chai = require('chai');

const expect = chai.expect;

describe('inputTree.inputKey', function () {
  it('calls default command, when given a key that was not initialized', function (){
    cut.initializeTree(null, {id: 'input'});
    const response = cut.inputKey({});

    expect(response.id).to.be.equal('input');

  });


});