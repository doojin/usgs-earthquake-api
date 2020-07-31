const UsgsApi = require('./usgs')
const contributorsConverter = require('./converter/contributorsConverter')

module.exports = class ContributorsApi extends UsgsApi {
  async getContributors () {
    const contributors = await this._httpGet('contributors', 'xml')
    return contributorsConverter.convert(contributors)
  }
}
