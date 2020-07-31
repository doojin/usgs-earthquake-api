const axios = require('axios')
const ContributorsApi = require('./contributors')

jest.mock('axios')

describe('Contributors API', () => {
  let contributorsApi

  beforeEach(() => {
    contributorsApi = new ContributorsApi()
  })

  describe('getContributors', () => {
    beforeEach(() => {
      axios.get.mockReturnValue({
        data: `
          <Contributors>
            <Contributor>contributor1</Contributor>
            <Contributor>contributor2</Contributor>
          </Contributors>
        `
      })
    })

    test('executes correct HTTP request', async () => {
      await contributorsApi.getContributors()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('https://earthquake.usgs.gov/fdsnws/event/1/contributors')
    })

    test('returns an array of contributors', async () => {
      const contributors = await contributorsApi.getContributors()
      expect(contributors).toEqual(['contributor1', 'contributor2'])
    })
  })
})
