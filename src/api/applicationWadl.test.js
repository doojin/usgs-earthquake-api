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

    describe('error during http request', () => {
      beforeEach(() => {
        axios.get.mockRejectedValue({
          response: {
            data: 'status code:400\n\ntest error\n\nsome other info'
          }
        })
      })

      test('throws an error with descriptive message', async () => {
        await expect(applicationWadlApi.getWadl()).rejects.toThrow('test error')
      })
    })

    test('executes correct HTTP request', async () => {
      await applicationWadlApi.getWadl()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/application.wadl')
    })
  })
})
