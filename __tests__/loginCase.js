require('dotenv').config();

const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const profileGenerator = require("random-profile-generator");

const screen = {
    width: 640,
    height: 480
};



(async () => {
    const profile = new profileGenerator.profile();
    const isHeadless = /^true$/i.test(process.env.HEAD_LESS);
    let builder = new Builder().forBrowser(Browser.CHROME)
    let driver;
    if (isHeadless) {
        driver = await builder
            .setChromeOptions(new chrome.Options().headless())
            .build();
    }
    else {
        driver = await builder.build();
    }
    
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