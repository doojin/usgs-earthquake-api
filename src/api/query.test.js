const axios = require('axios')
const QueryApi = require('./query')

jest.mock('axios')

describe('query API', () => {
  let queryApi

  beforeEach(() => {
    queryApi = new QueryApi()
  })

  describe('earthquakes', () => {
    beforeEach(() => {
      axios.get.mockReturnValue({ data: {} })
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
        await expect(queryApi.earthquakes()).rejects.toThrow('test error')
      })
    })

    test('executes correct HTTP request', async () => {
      await queryApi.earthquakes({
        unknownParameter: 'unknownValue',
        maxdepth: 3
      })

      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/query?maxdepth=3&format=geojson')
    })
  })
})
