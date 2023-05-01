const PORT = 8002
const express = require('express')
const cors = require ('cors')
const app = express()
const userRequests = require("./controller/userController");
const messageTemplateRequests = require('./controller/messageTemplateController');
const AdTemplateRequests = require ('./controller/adTemplateController')
const SearchUrlRequests = require ('./controller/searchUrlController.js')
const dotenv = require ('dotenv')
const puppeteer = require('puppeteer');
const { loginAndScrape } = require('./ebayscraper'); // Importieren Sie die loginAndScrape-Funktion aus dem vorherigen Beispiel

dotenv.config();
app.use(cors());


app.use(express.json());


app.get('/login', async (req, res) => {
  const username = process.env.EBAY_USERNAME;
  const password = process.env.EBAY_PASSWORD;
  const messages = await loginAndScrape(username, password);

  res.json({ success: true, messages });
});

//result and result:searchurl, might need to be changed to mongoose?

//result returns scraper function or item specific scraping

app.use("/results", require("./routes/scraperRoutes"));

app.use("/results/:SearchUrl", require("./routes/searchRoute"));

//Login and other User requests

 app.post("/Signup", userRequests.signUpUser);
 
//app.post('/Login', userRequests.loginUser); 
//MessageTemplates returns and posts Templates

app.post("/MessageTemplate", messageTemplateRequests.createMessageTemplate);
app.get("/MessageTemplate", messageTemplateRequests.getMessageTemplate);
app.get("/MessageTemplate", messageTemplateRequests.getMessageTemplates);

//AdTemplates returns and posts Templates

app.post("/AdTemplate", AdTemplateRequests.createAdTemplate);
app.get("/AdTemplate", AdTemplateRequests.getAdTemplate);
app.get("/AdTemplate", AdTemplateRequests.getAdTemplates);

//SearchUrl returns the users personal search Urls

app.post("/SearchUrl", SearchUrlRequests.createSearchUrl);
//app.get("/SearchUrl", SearchUrlRequests.getSearchUrls);


//post Listing ...

//send message

//login authenthication route





app.listen(PORT, () => {
  console.log(`server started: Listening to Port ${PORT}`);
});


