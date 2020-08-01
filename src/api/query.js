const UsgsApi = require('./usgs')
const QueryParameters = require('./query/queryParameters')

module.exports = class QueryApi extends UsgsApi {
  earthquakes (query = {}) {
    const parameters = new QueryParameters(query)
    return this._httpGet('query', 'json', parameters)
  }
}
