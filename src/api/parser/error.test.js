const errorParser = require('./error')

describe('error parser', () => {
  describe('parse', () => {
    test('extracts error message', () => {
      const errorData = 'status code: 400\n\ntest error message\n\nsome additional data'

      expect(errorParser.parse(errorData)).toEqual('test error message')
    })
  })
})
