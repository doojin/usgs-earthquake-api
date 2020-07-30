const VersionApi = require('./api/version')
const ApplicationApi = require('./api/application')

module.exports = {
  version: new VersionApi(),
  application: new ApplicationApi()
}
