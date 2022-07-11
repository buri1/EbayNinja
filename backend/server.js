const PORT = 8002
const express = require('express')
const cors = require ('cors')
const app = express()
const userRequests = require("./userRequests");
const messageTemplateRequests = require('./messageTemplateRequests');
const AdTemplateRequests = require ('./AdTemplateRequests')
const SearchUrlRequests = require ('./SearchUrlRequests')


app.use(cors());
app.use(express.json());

//result and result:searchurl, might need to be changed to mongoose?

//result returns scraper function or item specific scraping

app.use("/results", require("./routes/scraperRoutes"));

app.use("/results/:SearchUrl", require("./routes/searchRoute"));

//User creates and returns the User

app.post("/User", userRequests.createUser);
app.get("/User", userRequests.getUser);

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
app.get("/SearchUrl", SearchUrlRequests.getSearchUrls);


//post Listing ...

//send message

//login authenthication route





app.listen(PORT, () => {
  console.log(`server started: Listening to Port ${PORT}`);
});


