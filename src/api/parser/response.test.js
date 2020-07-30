const responseParser = require('./response');

describe('API response parser', () => {
  let format;
  let response;

  describe('response format is JSON', () => {
    beforeEach(() => {
      format = 'json';
      response = '{ "testProperty": "testValue" }';
    });

    it('parses JSON response into the object', () => {
      const result = responseParser.parse(response, format);
      expect(result).toEqual({ testProperty: 'testValue' });
    });
  });

  describe('response format is plain text', () => {
    beforeEach(() => {
      format = 'text';
      response = 'plainText';
    });

    it('returns plain text', () => {
      const result = responseParser.parse(response, format);
      expect(result).toEqual('plainText');
    });
  });

  describe('response format is unknown', () => {
    beforeEach(() => {
      format = 'unknown';
      response = 'plainText';
    });

    it('returns null', () => {
      const result = responseParser.parse(response, format);
      expect(result).toBeNull();
    });
  });
});
