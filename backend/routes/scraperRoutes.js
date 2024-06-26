const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require ('cors')
const app = express()




const router= express.Router()


router.get('/', (req,res) => {
    axios("https://www.kleinanzeigen.de/apple/k0")
    .then(response => {
    
      const html = response.data
      const $ = cheerio.load(html)
      const listings =[]
    
      $('.aditem').each(function(){
    
        const AdTitle = $(this).find('.ellipsis').text()
        const AdImg = $(this).find('.imagebox img').attr("src")
        const AdDescription =$(this).find('.aditem-main--middle--description').text().replace( /\n/g,'')
        const AdTime =$(this).find('.aditem-main--top--right').text().replace( /\n/g,'')
        const AdPlace=$(this).find('.aditem-main--top--left').text().replace( /\n/g,'')
        const AdUrl =$(this).find('.ellipsis').attr('href')
        const AdPrice =$(this).find('.aditem-main--middle--price-shipping--price').text().replace(/\n/g ,'').replace(/\s\s+/g, '')
        const AdUrlFinished= "https://www.kleinanzeigen.de"+  AdUrl

    
    
        listings.push({
          AdTitle, 
          AdImg, 
          AdDescription, 
          AdTime, 
          AdPlace,
          AdPrice,
          AdUrlFinished,
        })
    
      })
    // console.log(listings)
     res.json(listings)
    
    }) .catch(err => console.log(err))})



    router.post('/:id', (req,res) => {
        axios(`https://www.kleinanzeigen.de/${req.params.id}/k0`)
        .then(response => {
        
          const html = response.data
          const $ = cheerio.load(html)
          const listings =[]
        
          $('.aditem').each(function(){
        
            const AdTitle = $(this).find('.ellipsis').text()
            const AdImg = $(this).find('.imagebox img').attr("src")
            const AdDescription =$(this).find('.aditem-main--middle--description').text().replace( /\n/g,'')
            const AdTime =$(this).find('.aditem-main--top--right').text().replace( /\n/g,'').replace(/\s\s+/g, '')
            const AdPlace=$(this).find('.aditem-main--top--left').text().replace( /\n/g,'').replace(/\s\s+/g, '')
            const AdUrl =$(this).find('.ellipsis').attr('href')
            const AdPrice =$(this).find('.aditem-main--middle--price-shipping--price').text().replace(/\n/g ,'').replace(/\s\s+/g, '')
            const AdUrlFinished= "https://www.ebay-kleinanzeigen.de"+  AdUrl
    
        
        
            listings.push({
              AdTitle, 
              AdImg, 
              AdDescription, 
              AdTime, 
              AdPlace,
              AdPrice,
              AdUrlFinished,
            })
        
          })
        // console.log(listings)
         res.json(listings)
        
        }) .catch(err => console.log(err))})





    module.exports = router