const VersionApi = require('./api/version')
const ApplicationApi = require('./api/application')
const ApplicationWadlApi = require('./api/applicationWadl')
const CatalogsApi = require('./api/catalogs')
const ContributorsApi = require('./api/contributors')
const CountApi = require('./api/count')

module.exports = {
  version: new VersionApi(),
  application: new ApplicationApi(),
  applicationWadl: new ApplicationWadlApi(),
  catalogs: new CatalogsApi(),
  contributors: new ContributorsApi(),
  count: new CountApi()
}
