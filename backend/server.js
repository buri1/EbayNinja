const PORT = 8002
const express = require('express')
const cors = require ('cors')
const app = express()
const userRequests = require('./mongoose')
const getUser = require('./mongo')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json()) 





// TODO add URL composer
//listings will be made available for frotnend to fetch (add fs? to write a file?)
//Scraping AdImg, AdTitle, AdDescription, AdTime --> into listing obj

const url ="https://www.ebay-kleinanzeigen.de/oculus/k0"

app.get('/',function(req,res){
  res.json('this is my webscraper')
  
})

app.get('/hello',function(req,res){
  res.json('hello')
  
})

app.use('/results', require('./routes/scraperRoutes')

)

app.use('/results/:SearchUrl', require('./routes/searchRoute')

)

app.post('/User', userRequests.createUser

);

//app.get('/User', userRequests.getUser

//);


app.listen(PORT, () => {
console.log (`server started: Listening to Port ${PORT}`);
})

