let CommandResponse = require('../command-response');

class InvalidInputCommand {
  run() {
    return new CommandResponse({
      error: 'Please give right input'
    });
  }
}

module.exports = InvalidInputCommand;