const UsgsApi = require('./usgs.js');

module.exports = class VersionApi extends UsgsApi {
  async getVersion() {
    return await this._httpGet('version', 'text');
  }
}
