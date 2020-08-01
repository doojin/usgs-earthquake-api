const axios = require('axios')
const ApplicationApi = require('./application')

jest.mock('axios')

describe('application API', () => {
  let applicationApi

  beforeEach(() => {
    applicationApi = new ApplicationApi()
  })

  describe('getInterfaceParameters', () => {
    beforeEach(() => {
      axios.get.mockReturnValue({
        data: {
          params: 'testParams'
        }
      })
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
        await expect(applicationApi.getInterfaceParameters()).rejects.toThrow('test error')
      })
    })

    test('executes correct HTTP request', async () => {
      await applicationApi.getInterfaceParameters()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/application.json')
    })

    test('returns interface parameters', async () => {
      const interfaceParams = await applicationApi.getInterfaceParameters()
      expect(interfaceParams).toEqual({ params: 'testParams' })
    })
  })
})
