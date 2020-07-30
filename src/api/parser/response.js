const parsers = [
  {
    name: 'json',
    exec(str) {
      return JSON.parse(str);
    }
  },
  {
    name: 'text',
    exec(str) {
      return str;
    }
  }
];


module.exports = {
  parse(response, format) {
    const parser = parsers.find(parser => parser.name === format);
    return parser ? parser.exec(response) : null;
  }
};
