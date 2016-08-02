let GotoMainPageCommand = require('./commands/goto-main-page');
let RouteResponse = require('./route-response');

const DEFAULT_MAPPING = {
  "*": new GotoMainPageCommand()
};

class Route {
  constructor() {
    this.mapping = DEFAULT_MAPPING;
  }

  handle(input) {
    let command = this.mapping[input] || this.mapping['*'];
    let response = command.run(input);

    if (response.error) {
      return new RouteResponse({
        text: response.error
      });
    }

    if (response.reset) {
      this.mapping = DEFAULT_MAPPING;
      return new RouteResponse({
        text: response.text,
        rerun: true
      });
    }

    if (response.newMapping) {
      this.mapping = response.newMapping;
      return new RouteResponse({
        text: response.text
      });
    }

    return new RouteResponse({
      text: response.text
    });
  }
}


module.exports = Route;