import React, {useState, useEffect} from 'react'
import "./App.css";
import Scraper from './components/scraper/scraper';
import Header from './components/header/header';
import Search from './components/search/search';





const App = () => {
  return (
    <div>
    <Header/>
    <Search/>
    <Scraper/>

    </div>

  );
};

export default App;
