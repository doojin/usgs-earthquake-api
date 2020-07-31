const catalogsConverter = require('./catalogsConverter')

describe('catalogs converter', () => {
  describe('convert', () => {
    let catalogsData

    beforeEach(() => {
      catalogsData = {
        Catalogs: {
          Catalog: [
            'catalog1',
            'catalog2'
          ]
        }
      }
    })

    test('converts received catalogs data into array of values', async () => {
      const converted = await catalogsConverter.convert(catalogsData)
      expect(converted).toEqual(['catalog1', 'catalog2'])
    })
  })
})
