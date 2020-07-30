const parsers = [
  {
    name: 'json',
    exec (obj) {
      return obj
    }
  },
  {
    name: 'text',
    exec (text) {
      return { result: text }
    }
  }
]

module.exports = {
  parse (response, format) {
    const parser = parsers.find(parser => parser.name === format)
    return parser ? parser.exec(response) : null
  }
}
