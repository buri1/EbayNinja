import React from 'react'
import Header from './components/header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Inbox from './components/Inbox/Inbox';
import Searchagent from './components/Searchagent/Searchagent';
import Loginpage from './components/Loginpage/Loginpage';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div class="flex h-full flex-row bg-gray-400">
    <Sidebar/>
    <Routes>
      
    <Route path="/" element={<Loginpage/>}></Route>
    
      <Route path="/Dashboard" element={
              
                <Dashboard/>
              
          }>
      </Route>
      
      <Route path="/Inbox" element={<Inbox class="flex flex-1 "/>

      }>
      </Route>
      <Route path="/Searchagent" element={<Searchagent/>}>
      </Route>
      
        
    </Routes>
    
    </div>

    </BrowserRouter>
    </>

  );
};

export default App;

