import React from 'react'
import Scraper from '../scraper/scraper'
import Scraperv2 from '../Scraperv2/Scraperv2'



function Searchagent(Searchkey) {


  return (
    

              
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />

      <label htmlFor="job">job</label>
      <input id="job" name="job" type="text" />
      <input type="submit" value="submit" />
    </form>

  )
}

export default Searchagent