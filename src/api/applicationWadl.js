const UsgsApi = require('./usgs')
const wadlConverter = require('./converter/wadlConverter')

module.exports = class ApplicationWadlApi extends UsgsApi {
  async getWadl () {
    const wadlData = await this._httpGet('application.wadl', 'xml')
    return wadlConverter.convert(wadlData)
  }
}
