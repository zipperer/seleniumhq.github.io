const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

describe('Move to element', function () {
  let driver;

  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
  });

  after(async () => await driver.quit());

  it('Mouse move into an element', async function () {
    await driver.get('https://www.selenium.dev/selenium/web/mouse_interaction.html');
    const hoverable = driver.findElement(By.id("hover"));
    const actions = driver.actions({async: true});
    await actions.move({origin: hoverable}).perform();

    const status = await driver.findElement(By.id('move-status')).getText();
    assert.deepStrictEqual(status, `hovered`)
  });
});
