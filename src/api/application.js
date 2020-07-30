const UsgsApi = require('./usgs')

module.exports = class ApplicationApi extends UsgsApi {
  async getInterfaceParameters () {
    return this._httpGet('application.json', 'json')
  }
}
