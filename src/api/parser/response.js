const xml2js = require('xml2js')

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
  },
  {
    name: 'xml',
    exec (data) {
      return xml2js.parseStringPromise(data, { trim: true })
    }
  }
]

module.exports = {
  async parse (response, format) {
    const parser = parsers.find(parser => parser.name === format)
    return parser ? parser.exec(response) : null
  }
}
