const axios = require('axios')
const CatalogsApi = require('./catalogs')

jest.mock('axios')

describe('catalogs API', () => {
  let catalogsApi

  beforeEach(() => {
    catalogsApi = new CatalogsApi()
  })

  describe('getCatalogs', () => {
    beforeEach(() => {
      axios.get.mockReturnValue({
        data: `
          <Catalogs>
            <Catalog>catalog1</Catalog>
            <Catalog>catalog2</Catalog>
          </Catalogs>
        `
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
        await expect(catalogsApi.getCatalogs()).rejects.toThrow('test error')
      })
    })

    test('executes correct HTTP request', async () => {
      await catalogsApi.getCatalogs()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/catalogs')
    })

    test('returns an array of available catalogs', async () => {
      const catalogs = await catalogsApi.getCatalogs()
      expect(catalogs).toEqual(['catalog1', 'catalog2'])
    })
  })
})
