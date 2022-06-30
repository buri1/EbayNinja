import React from 'react'
import Scraper from '../scraper/scraper'
import Widgets from '../Widgets/Widgets'

function Dashboard() {
  return (
<>
    <div class="flex flex-row md:w-5/12 " >
        <Scraper/>
    </div>
    <div class="flex flex-row flex-1 sm:hidden md:flex md:w-7/12 " >
        <Widgets/>
    </div>


</>
  )
}

export default Dashboard