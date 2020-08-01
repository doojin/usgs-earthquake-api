const axios = require('axios')
const CountApi = require('./count')

jest.mock('axios')

describe('count API', () => {
  let countApi

  beforeEach(() => {
    countApi = new CountApi()
  })

  describe('getCount', () => {
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
        await expect(countApi.getCount()).rejects.toThrow('test error')
      })
    })

    test('sends correct HTTP requests', async () => {
      await countApi.getCount({
        unknownParam: 'unknownValue',
        maxdepth: 5
      })

      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/count?maxdepth=5&format=geojson')
    })
  })
})
