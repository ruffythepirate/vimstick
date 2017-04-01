const keyParser = module.exports;

keyParser.createKeyArray = createKeyArray;


  function createKeyArray(keysAsString) {
    const keys = keysAsString.split(' ').map(k => k.trim()).filter(k => k);

    return keys;
  }