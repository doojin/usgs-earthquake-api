const contributorsConverter = require('./contributorsConverter')

describe('contributors converter', () => {
  describe('convert', () => {
    let contributors

    beforeEach(() => {
      contributors = {
        Contributors: {
          Contributor: [
            'contributor1',
            'contributor2'
          ]
        }
      }
    })

    test('converts contributors data into the array of values', () => {
      const converted = contributorsConverter.convert(contributors)
      expect(converted).toEqual(['contributor1', 'contributor2'])
    })
  })
})
