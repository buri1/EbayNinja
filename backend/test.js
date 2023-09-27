// Import the loginAndScrape function
const { loginAndScrape } = require('./ebayscraper.js');

// Define your scraper API key, proxy credentials, eBay Kleinanzeigen login credentials, etc.
const scraperapiApiKey = 'YOUR_SCRAPERAPI_API_KEY';
const PROXY_USERNAME = 'YOUR_PROXY_USERNAME';
const PROXY_PASSWORD = 'YOUR_PROXY_PASSWORD';
const ebayUsername = 'YOUR_EBAY_KLEINANZEIGEN_USERNAME';
const ebayPassword = 'YOUR_EBAY_KLEINANZEIGEN_PASSWORD';

// Call the loginAndScrape function with your credentials
(async () => {
  try {
    await loginAndScrape(ebayUsername, ebayPassword, scraperapiApiKey, PROXY_USERNAME, PROXY_PASSWORD);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
