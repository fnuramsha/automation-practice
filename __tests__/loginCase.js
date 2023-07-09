const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const profileGenerator = require("random-profile-generator");



(async() => {
    const profile = new profileGenerator.profile();
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.moebel-kraft.de');
    await driver.findElementBy.cssSelector('a.headerElement__link.headerElement__link--login').click()
    await driver.findElementBy.cssSelector('data-testid="loginEmailInput').fill()
    await driver.findElementBy.cssSelector('#loginPassword[data-testid="loginPasswordInput"]').fill(profile.lastName).fill()
    await driver.findElementBy('#login-submit').click()
    await page.locator('a.headerElement__link.headerElement__link--login').click()
    await page.locator('data-testid="loginEmailInput"')
    await driver.quit();
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    
  
})();