var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('Navigation menu', function(){
  var client;

  before(function() {
    client = webdriverio.remote({ desiredCapabilities: { browserName: process.env.SELENIUM_BROWSER || 'firefox' } });
    return client.init();
  });

  // it('header logo', function() {
  //   return client
  //     .url('https://github.com/')
  //     .getElementSize('.header-logo-invertocat .octicon.octicon-mark-github').then(function (result) {
  //       assert(result.height === 32);
  //       assert(result.width  === 32);
  //     });
  // });

    it('title', function() {
    return client
      .url('https://github.com/')
      .getTitle().then(function (title) {
        assert(title === "Menu");
      });
    });

  //   it('href color', function() {
  //   return client
  //     .url('https://github.com/')
  //     .getCssProperty('a[href="/pricing"]', 'color').then(function (result) {
  //       assert(result.value === 'rgba(255,255,255,1)');
  //     });
  // });

  after(function() {
    return client.end();
  });
});
