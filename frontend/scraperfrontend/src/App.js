import React from 'react'
import Header from './components/header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Inbox from './components/Inbox/Inbox';
import Searchagent from './components/Searchagent/Searchagent';
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
    <div class="flex flex-row">
    <Sidebar />
    <Routes>

    <Route path="/" element={<Navigate to="/dashboard" />}/>
    
      <Route path="/Dashboard" element={
              <div class="flex flex-row">
                <Dashboard/>
              </div> 
          }>
      </Route>
      <Route path="/Inbox" element={<Inbox/>

      }>
      </Route>
      <Route path="/Searchagent" element={<Searchagent/>

}>
</Route>
    </Routes>
    </div>

    </BrowserRouter>
    </>

  );
};

export default App;

