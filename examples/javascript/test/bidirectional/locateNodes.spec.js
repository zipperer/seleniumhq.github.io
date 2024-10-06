const assert = require("assert");
const firefox = require('selenium-webdriver/firefox');
const {BrowsingContext, Builder} = require("selenium-webdriver");
const {Locator} = require("selenium-webdriver/bidi/browsingContext");
const {LocalValue} = require("selenium-webdriver/bidi/protocolValue");
const {ArgumentValue} = require("selenium-webdriver/bidi/argumentValue");

describe('Locate Nodes', function () {
  let driver

  beforeEach(async function () {
    driver = new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(new firefox.Options().enableBidi())
      .build()
  })

  afterEach(async function () {
    await driver.quit()
  })

  xit('can locate nodes', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const element = await browsingContext.locateNodes(Locator.css('div'))
    assert.strictEqual(element.length, 13)
  })

  xit('can locate node', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const element = await browsingContext.locateNode(Locator.css('div'))
    assert.strictEqual(element.type, 'node')
  })

  xit('can locate node with css locator', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const elements = await browsingContext.locateNodes(Locator.css('div.extraDiv, div.content'), 1)
    const element = elements[0]
    assert.strictEqual(element.type, 'node')
    assert.notEqual(element.value, undefined)
    assert.strictEqual(element.value.localName, 'div')
    assert.strictEqual(element.value.attributes.class, 'content')
    assert.notEqual(element.sharedId, undefined)
  })

  xit('can locate node with xpath locator', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')
    const elements = await browsingContext.locateNodes(Locator.xpath('/html/body/div[2]'), 1)

    const element = elements[0]
    assert.strictEqual(element.type, 'node')
    assert.notEqual(element.value, undefined)
    assert.strictEqual(element.value.localName, 'div')
    assert.strictEqual(element.value.attributes.class, 'content')
    assert.notEqual(element.sharedId, undefined)
  })

  xit('can locate node with inner test locator', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')
    const elements = await browsingContext.locateNodes(Locator.innerText('Spaced out'), 1)

    const element = elements[0]
    assert.strictEqual(element.type, 'node')
    assert.notEqual(element.value, undefined)
    assert.strictEqual(element.value.localName, 'div')
    assert.strictEqual(element.value.attributes.class, 'content')
    assert.notEqual(element.sharedId, undefined)
  })

  xit('can locate node with max node count', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const elements = await browsingContext.locateNodes(Locator.css('div'), 4)
    assert.strictEqual(elements.length, 4)
  })

  xit('can locate node with none ownership value', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const elements = await browsingContext.locateNodes(Locator.css('div'), undefined, 'none')
    assert.strictEqual(elements.length, 13)
    assert.strictEqual(elements[0].handle, null)
  })

  xit('can locate node with root ownership value', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const elements = await browsingContext.locateNodes(Locator.css('div'), undefined, 'root')
    assert.strictEqual(elements.length, 13)
    assert.notEqual(elements[0].handle, null)
  })

  xit('can locate node with given start nodes', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get(Pages.formPage)

    const script = await ScriptManager(id, driver)

    const result = await script.evaluateFunctionInBrowsingContext(
      id,
      "document.querySelectorAll('form')",
      false,
      'root',
    )

    assert.equal(result.resultType, EvaluateResultType.SUCCESS)
    assert.notEqual(result.realmId, null)
    assert.equal(result.result.type, 'nodelist')

    const value = result.result.value

    const startNodes = []

    value.forEach((node) => {
      startNodes.push(new ReferenceValue(node.handle, node.sharedId))
    })

    const elements = await browsingContext.locateNodes(
      Locator.css('input'),
      50,
      'none',
      undefined,
      undefined,
      startNodes,
    )

    assert.strictEqual(elements.length, 35)
  })

  xit('can locate nodes in a given sandbox', async function () {
    const sandbox = 'sandbox'
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await browsingContext.navigate('https://www.selenium.dev/selenium/web/xhtmlTest.html', 'complete')

    const elements = await browsingContext.locateNodes(Locator.css('div'), 1, undefined, sandbox)

    assert.strictEqual(elements.length, 1)

    const nodeId = elements[0].sharedId

    const script = await ScriptManager(id, driver)

    let argumentValues = []
    let mapValue = { sharedId: LocalValue.createStringValue(nodeId) }
    argumentValues.push(new ArgumentValue(LocalValue.createMapValue(mapValue)))

    const response = await script.callFunctionInBrowsingContext(
      id,
      'function(){ return arguments[0]; }',
      false,
      argumentValues,
      undefined,
      undefined,
      sandbox,
    )

    assert.equal(response.resultType, EvaluateResultType.SUCCESS)
    assert.equal(response.result.type, 'map')

    const sharedId = response.result.value.sharedId

    assert.strictEqual(sharedId.value, nodeId)
  })

  xit('can find element', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const element = await browsingContext.locateElement(Locator.css('p'))
    const elementText = await element.getText()
    assert.strictEqual(elementText, 'Open new window')
  })

  xit('can find elements', async function () {
    const id = await driver.getWindowHandle()
    const browsingContext = await BrowsingContext(driver, {
      browsingContextId: id,
    })

    await driver.get('https://www.selenium.dev/selenium/web/xhtmlTest.html')

    const elements = await browsingContext.locateElements(Locator.css('div'))
    assert.strictEqual(elements.length, 13)

    const elementText = await elements[0].getText()
    assert.strictEqual(elementText.includes('Open new window'), true)
  })
})
