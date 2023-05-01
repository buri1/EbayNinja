const puppeteer = require('puppeteer');

PROXY_USERNAME = 'scraperapi';
PROXY_PASSWORD = '82151f946c698dc5bce9a20ac14786f3'; // <-- enter your API_Key here
PROXY_SERVER = 'proxy-server.scraperapi.com';
PROXY_SERVER_PORT = '8001';

const scraperapiApiKey = '82151f946c698dc5bce9a20ac14786f3';

async function loginAndScrape(username, password) {
  const proxyUrl = `http://scraperapi.render=true.country_code=de:${scraperapiApiKey}@proxy-server.scraperapi.com:8001`;

  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--proxy-server=${proxyUrl}`,
    ],
  });

  const page = await browser.newPage();
  await page.authenticate({
    username: PROXY_USERNAME,
    password: PROXY_PASSWORD,
  });
  await page.setViewport({ width: 1200, height: 800 });

  await page.goto('https://www.ebay-kleinanzeigen.de/m-einloggen.html?targetUrl=/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  //close announcement popup
  await page.waitForFunction(() => {
    const closeButton = document.querySelector('[data-testid=modal-close]');
    return closeButton && closeButton.closest('button') && getComputedStyle(closeButton.closest('button')).display !== 'none';
  }, { timeout: 10000 }); // Set a reasonable timeout, e.g., 10 seconds

  // Click the close button
  await page.evaluate(() => {
    const closeButton = document.querySelector('[data-testid=modal-close]');
    closeButton.closest('button').click();
  });
//close coockie popup
  await page.waitForFunction(() => {
    const closeButton = document.querySelector('#gdpr-banner-accept');
    return closeButton && closeButton.closest('button') && getComputedStyle(closeButton.closest('button')).display !== 'none';
  }, { timeout: 10000 }); // Set a reasonable timeout, e.g., 10 seconds

  // Click the close button
  await page.evaluate(() => {
    const closeButton = document.querySelector('#gdpr-banner-accept');
    closeButton.closest('button').click();
  });

  await page.waitForSelector('#login-email');
  await page.type('#login-email', username);
  await page.type('#login-password', password);
  await page.click('#login-submit');



}

module.exports = { loginAndScrape };

