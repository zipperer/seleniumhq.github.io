const {Browser, By, Builder} = require('selenium-webdriver');
const Firefox = require('selenium-webdriver/firefox');
const options = new Firefox.Options();
const path = require('path');
const assert = require("assert");


describe('Should be able to Test Command line arguments', function () {
  it('headless', async function () {
    let driver = new Builder()
      .forBrowser(Browser.FIREFOX)
      .setFirefoxOptions(options.addArguments('--headless'))
      .build();

    await driver.get('https://www.selenium.dev/selenium/web/blank.html');
    await driver.quit();
  });

  it('Should be able to add extension', async function () {

    const xpiPath = path.resolve('./test/resources/extensions/selenium-example.xpi')
    let driver = new Builder()
      .forBrowser(Browser.FIREFOX)
      .build()
    let id = await driver.installAddon(xpiPath);
    await driver.uninstallAddon(id);


    await driver.get('https://www.selenium.dev/selenium/web/blank.html');
    const ele = await driver.findElements(By.id("webextensions-selenium-example"));
    assert.equal(ele.length, 0);
    await driver.quit();
  });

  it('Should be able to install unsigned addon', async function () {

    const xpiPath = path.resolve('./test/resources/extensions/selenium-example')
    let driver = new Builder()
      .forBrowser(Browser.FIREFOX)
      .build()
    let id = await driver.installAddon(xpiPath, true);
    await driver.uninstallAddon(id);


    await driver.get('https://www.selenium.dev/selenium/web/blank.html');
    const ele = await driver.findElements(By.id("webextensions-selenium-example"));
    assert.equal(ele.length, 0);
    await driver.quit();
  });
});