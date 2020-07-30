const axios = require('axios')
const VersionApi = require('./version')

jest.mock('axios')

describe('version API', () => {
  let versionApi

  beforeEach(() => {
    versionApi = new VersionApi()
  })

  describe('getVersion', () => {
    beforeEach(() => {
      axios.get.mockReturnValue({ data: '12.34.56' })
    })

    test('executes correct HTTP request', async () => {
      await versionApi.getVersion()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/version')
    })

    test('returns API version as string', async () => {
      const version = await versionApi.getVersion()
      expect(version).toEqual('12.34.56')
    })
  })
})
