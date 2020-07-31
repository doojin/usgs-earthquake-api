const UsgsApi = require('./usgs')
const catalogsConverter = require('./converter/catalogsConverter')

module.exports = class CatalogApi extends UsgsApi {
  async getCatalogs () {
    const catalogs = await this._httpGet('catalogs', 'xml')
    return catalogsConverter.convert(catalogs)
  }
}
