const axios = require('axios')
const urlBuilder = require('./url/builder')
const responseParser = require('./parser/response')
const errorParser = require('./parser/error')

module.exports = class UsgsApi {
  async _httpGet (path, format, params = {}) {
    const url = urlBuilder.build(path, params)

    let response
    try {
      response = await axios.get(url)
    } catch (e) {
      const errorData = e.response.data
      const errorMessage = errorParser.parse(errorData)
      throw new Error(errorMessage)
    }

    return responseParser.parse(response.data, format)
  }
}
