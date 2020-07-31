const axios = require('axios')
const ApplicationWadlApi = require('./applicationWadl')

jest.mock('axios')

describe('ApplicationWadlApi', () => {
  let applicationWadlApi

  beforeEach(() => {
    applicationWadlApi = new ApplicationWadlApi()
  })

  describe('getWadl', () => {
    beforeEach(() => {
      axios.get.mockReturnValue({ data: '<test></test>' })
    })

    test('executes correct HTTP request', async () => {
      await applicationWadlApi.getWadl()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/application.wadl')
    })
  })
})
