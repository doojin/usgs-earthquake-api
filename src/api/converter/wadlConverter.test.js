const wadlConverter = require('./wadlConverter')

describe('WADL data converter', () => {
  describe('convert', () => {
    let wadlData

    beforeEach(() => {
      wadlData = {
        application: {
          resources: [
            {
              $: {
                base: 'testBase'
              },
              resource: [
                {
                  $: {
                    path: 'testResourcePath'
                  },
                  method: [
                    {
                      $: {
                        id: 'testMethodId',
                        name: 'testMethodName'
                      },
                      response: [
                        {
                          $: {
                            status: 'testResponseStatus'
                          },
                          representation: [
                            {
                              $: {
                                mediaType: 'testRepresentationMediaType',
                                element: 'testRepresentationElement'
                              }
                            }
                          ]
                        }
                      ],
                      request: [
                        {
                          param: [
                            {
                              $: {
                                name: 'testParamName',
                                style: 'testParamStyle',
                                type: 'testParamType',
                                mediaType: 'testParamMediaType',
                                default: 'testParamDefault'
                              },
                              option: [
                                {
                                  $: {
                                    mediaType: 'testOptionMediaType',
                                    value: 'testOptionValue'
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    })

    test('converts WADL data', () => {
      const result = wadlConverter.convert(wadlData)
      expect(result).toEqual({
        application: {
          resources: [
            {
              base: 'testBase',
              resource: [
                {
                  path: 'testResourcePath',
                  method: [
                    {
                      id: 'testMethodId',
                      name: 'testMethodName',
                      request: [
                        {
                          param: [
                            {
                              default: 'testParamDefault',
                              mediaType: 'testParamMediaType',
                              name: 'testParamName',
                              style: 'testParamStyle',
                              type: 'testParamType',
                              option: [
                                {
                                  mediaType: 'testOptionMediaType',
                                  value: 'testOptionValue'
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      response: [
                        {
                          representation: [
                            {
                              element: 'testRepresentationElement',
                              mediaType: 'testRepresentationMediaType'
                            }
                          ],
                          status: 'testResponseStatus'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      })
    })
  })
})
