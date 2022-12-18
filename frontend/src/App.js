import React from 'react'
import Header from './components/header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Inbox from './components/Inbox/Inbox';
import Searchagent from './components/Searchagent/Searchagent';
import Loginpage from './components/Loginpage/Loginpage';
import Mainpage from './components/Mainpage/Mainpage';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';



const App = () => {
  return (
    <>

         <Routes>
           <Route path="/" element={<Loginpage/> }>
           </Route>
           <Route path="/App/*" element={<Mainpage />}>
           </Route>
         </Routes>
    </>

  );
};

export default App;

