const cut = require('../../src/app/input/inputTree.js');

const chai = require('chai');

const expect = chai.expect;

describe('inputTree.inputKey', function() {
  it('calls default command, when given a key that was not initialized', function() {
    cut.initializeTree(null, {
      id: 'input'
    });
    const response = cut.inputKey({});

    expect(response.id).to.be.equal('input');
  });

  it('maps a keystroke to one key', function() {
    cut.initializeTree([{id:'custom', key: 'a'}]);

    const response = cut.inputKey({ key: 'a' });

    expect(response.id).to.be.equal('custom');
  });


  it('can map two keystrokes to two keys', function() {
  });

  it('hello can map two keystrokes to two keys', function() {
  });

});