let {stripMargin} = require('stripmargin');
let commandBarcodeToZipcodePage = require('./goto-barcode-to-zipcode-page');
let commandZipcodeToBarcodePage = require('./goto-zipcode-to-barcode-page');
let commandExit = require('./exit');
let commandInvalidInput = require('./invalid-input');

module.exports = function () {
  return {
    text: stripMargin(
      `|1. Translate zip code to bar code
       |2. Translate bar code to zip code
       |3. Quit
       |Please input your choices(1~3)`),
    newMapping: {
      "1": commandZipcodeToBarcodePage,
      "2": commandBarcodeToZipcodePage,
      "3": commandExit,
      "*": commandInvalidInput
    }
  }
};