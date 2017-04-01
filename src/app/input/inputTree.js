module.exports = function() {

  const self = this;
  self.initializeTree = initializeTree;
  self.inputKey = inputKey;
  
  const rootNode = {};


  var defaultCommand = undefined;

  function initializeTree(keyMap, dCmd) {
    defaultCommand = dCmd;
  }

  function inputKey(input) {
    return defaultCommand;
  }

  return self;

}();
