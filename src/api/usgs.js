const axios = require('axios');
const urlBuilder = require('./url/builder');
const responseParser = require('./parser/response');

module.exports = class UsgsApi {
  async _httpGet(path, format, params = {}) {
    const url = urlBuilder.build(path, params);
    const response = await axios.get(url);
    return responseParser.parse(response.data, format);
  }
}
