const keyParser = require('./keyParser');

const createKeyArray = keyParser.createKeyArray;

module.exports = function() {

  const self = this;
  self.initializeTree = initializeTree;
  self.inputKey = inputKey;
  self.inputKeys = inputKeys;

  const rootNode = {
    children: []
  };

  var defaultCommand = undefined;

  function initializeTree(commands, dCmd) {

    if (commands) {
      commands.forEach(command => appendCommand(rootNode, command))
    }
    console.log(rootNode)

    defaultCommand = dCmd;
  }

  function inputKeys(keys) {
    const command = findCommand(keys, rootNode);

    return command ? command : defaultCommand;

  }

  function inputKey(input) {
    return inputKeys([input]);
  }

  return self;

  function appendCommand(rootNode, command) {
    var keys = createKeyArray(command.key);
    keys.reduce((a, v, i) => {
      var nextNode = a.children.find(c => c.key === v);
      if (!nextNode) {
        nextNode = {
          children: [],
          key: v
        };
        a.children.push(nextNode);
      }
      if (i === keys.length - 1) {
        nextNode.command = command;
      }
      return nextNode;
    }, rootNode);
  }

  function findCommand(keys, currentNode) {
    if (currentNode == null) {
      return null;
    }
    if (keys.length == 0) {
      return currentNode.command;
    }
    var currentKey = keys[keys.length - 1];
    return findCommand(keys.slice(0, keys.length - 1),
      currentNode.children.find(c => c.key === currentKey));
  }

}();