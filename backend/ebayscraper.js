
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');




puppeteer.use(StealthPlugin());
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: 'f49e7000e201a618f0a4f2d397df04c2', // Replace with your actual 2Captcha API key
    },
    visualFeedback: true, // Colorize solved captchas for debugging purposes
  })
);



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
await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36');

  await page.authenticate({
    username: PROXY_USERNAME,
    password: PROXY_PASSWORD,
  });
  await page.setViewport({ width: 1200, height: 800 });

  await page.goto('https://www.ebay-kleinanzeigen.de/m-einloggen.html?targetUrl=/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  //close announcement popup
 // Close announcement popup
await page.waitForSelector('[data-testid=modal-close]');
await page.click('[data-testid=modal-close]');

// Close cookie popup
await page.waitForSelector('.Button--Body');
await page.click('.Button--Body');

// Clear cookies
await page.waitForTimeout(1000); // Add a small delay to ensure cookies are cleared
await page.evaluate(() => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
});

// Continue with login
await page.waitForSelector('#login-email');
await page.type('#login-email', username);
await page.type('#login-password', password);
for (const frame of page.mainFrame().childFrames()) {
  // Attempt to solve any potential captchas in those frames
  await frame.solveRecaptchas();
}
await Promise.all([
  page.waitForNavigation(),
  page.click('#login-submit'),
]);
}
module.exports = { loginAndScrape };

