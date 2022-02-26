const PORT = 8002
const express = require('express')
const axios = require ('axios')
const cheerio = require ('cheerio')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/scraper", scraper)
app.use('*', (req,res)=>{
    res.status(404).json({error:"not found"})
})

export default app