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


app.get('/results', (req,res) => {
axios("https://www.ebay-kleinanzeigen.de/oculus/k0")
.then(response => {

  const html = response.data
  const $ = cheerio.load(html)
  const listings =[]

  $('.lazyload-item', html).each(function(){

    const AdTitle = $(this).find('.ellipsis').text()
    const AdImg = $(this).find('.aditem-image div').attr("data-imgsrc")
    const AdDescription =$(this).find('.aditem-main--middle--description').text()
    const AdTime =$(this).find('.aditem-main--top--right').text()
    const AdPlace=$(this).find('.aditem-main--top--left').text()


    listings.push({
      AdTitle, 
      AdImg, 
      AdDescription, 
      AdTime, 
      AdPlace
    })

  })
// console.log(listings)
 res.json(listings)

}) .catch(err => console.log(err))})




app.listen(PORT, () => {
console.log (`server started: Listening to Port ${PORT}`);
})

