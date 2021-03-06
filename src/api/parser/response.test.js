const responseParser = require('./response')

describe('API response parser', () => {
  let format
  let response

  describe('response format is JSON', () => {
    beforeEach(() => {
      format = 'json'
      response = { testProperty: 'testValue' }
    })

    test('parses JSON response into the object', async () => {
      const result = await responseParser.parse(response, format)
      expect(result).toEqual({ testProperty: 'testValue' })
    })
  })

  describe('response format is plain text', () => {
    beforeEach(() => {
      format = 'text'
      response = 'plainText'
    })

    test('returns plain text', async () => {
      const result = await responseParser.parse(response, format)
      expect(result).toEqual({ result: 'plainText' })
    })
  })

  describe('response format is unknown', () => {
    beforeEach(() => {
      format = 'unknown'
      response = 'plainText'
    })

    test('returns null', async () => {
      const result = await responseParser.parse(response, format)
      expect(result).toBeNull()
    })
  })

  describe('response format is xml', () => {
    beforeEach(() => {
      format = 'xml'
      response = `
        <test1>
          <test2>
            someText
          </test2>
        </test1>
      `
    })

    test('returns parsed XML object', async () => {
      const result = await responseParser.parse(response, format)
      expect(result).toEqual({
        test1: {
          test2: ['someText']
        }
      })
    })
  })
})
