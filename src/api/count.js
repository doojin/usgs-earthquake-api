const UsgsApi = require('./usgs')
const QueryParameters = require('./query/queryParameters')

module.exports = class CountApi extends UsgsApi {
  getCount (query = {}) {
    const parameters = new QueryParameters(query)
    return this._httpGet('count', 'json', parameters)
  }
}
