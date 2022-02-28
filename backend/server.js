const PORT = 8002
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require ('cors')
const app = express()

app.use(cors())





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


app.listen(PORT, () => {
console.log (`server started: Listening to Port ${PORT}`);
})

