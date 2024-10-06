const {VirtualAuthenticatorOptions, Transport, Protocol} = require("selenium-webdriver/lib/virtual_authenticator");
const assert = require('assert')


describe('Virtual authenticator options', function () {
  let options;

  it('Virtual options', async function () {
    options = new VirtualAuthenticatorOptions();
    options.setIsUserVerified(true);
    options.setHasUserVerification(true);
    options.setIsUserConsenting(true);
    options.setTransport(Transport['USB']);
    options.setProtocol(Protocol['U2F']);
    options.setHasResidentKey(false);

    assert(Object.keys(options).length === 6);
  });

  it('User verified', async function () {
    options.setIsUserVerified(true);

    assert(options.toDict()['isUserVerified']);
  });
});