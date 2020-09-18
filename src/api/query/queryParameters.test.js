const QueryParameters = require('./queryParameters')

describe('query parameters', () => {
  describe('constructor', () => {
    test('not filters out parameter with 0 value', () => {
      const parameters = new QueryParameters({
        limit: 0
      })

      expect(parameters).toEqual({
        limit: 0,
        format: 'geojson'
      })
    })

    test('filters out unknown parameters', () => {
      const parameters = new QueryParameters({
        unknown: 1
      })

      expect(parameters).toEqual({
        format: 'geojson'
      })
    })

    test('filters out empty parameter values', () => {
      const parameters = new QueryParameters({
        producttype: ''
      })

      expect(parameters).toEqual({
        format: 'geojson'
      })
    })

    test('keeps known parameters', () => {
      const parameters = new QueryParameters({
        producttype: 'testProductType'
      })

      expect(parameters).toEqual({
        producttype: 'testProductType',
        format: 'geojson'
      })
    })
  })
})
