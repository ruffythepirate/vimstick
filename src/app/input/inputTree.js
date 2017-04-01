const keyParser = require('./keyParser');

module.exports = function() {

  const self = this;
  self.initializeTree = initializeTree;
  self.inputKey = inputKey;
  
  const rootNode = {};

var defaultCommand = undefined;

  function initializeTree(keyMap, dCmd) {

    keyMap.reduce((v, i, a) => {
      var keys = createKeyArray(v.key);



    });

    defaultCommand = dCmd;
  }

  function inputKey(input) {


    return defaultCommand;
  }

  return self;

  function appendCommand(command, keys, node) {
    if(keys.length == 0) {
      return;
    } else {
    }
  }





}();
