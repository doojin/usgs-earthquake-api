const urlBuilder = require('./builder');

describe('API url builder', () => {
  describe('build', () => {
    let parameters;

    describe('without parameters', () => {
      test('builds url without any parameters', () => {
        const url = urlBuilder.build('test-path');
        expect(url).toEqual('https://earthquake.usgs.gov/fdsnws/event/test-path');
      });
    });

    describe('with parameters', () => {
      beforeEach(() => {
        parameters = {
          param1: 'value1',
          param2: 2
        };
      });

      test('builds url with provided parameters', () => {
        const url = urlBuilder.build('test-path', parameters);
        expect(url).toEqual('https://earthquake.usgs.gov/fdsnws/event/test-path?param1=value1&param2=2');
      });
    });
  });
});
