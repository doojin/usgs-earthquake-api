const BASE_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/'

module.exports = {
  build (path, params = {}) {
    const url = new URL(BASE_URL)
    url.pathname += path
    Object.entries(params).forEach(([name, value]) => url.searchParams.set(name, value))
    return url.toString()
  }
}
