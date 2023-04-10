import React from 'react'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';
import Inbox from '../Inbox/Inbox';
import Searchagent from '../Searchagent/Searchagent';
import Loginpage from '../Loginpage/Loginpage';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';


function Mainpage() {
  return (
    <>
    <Header />
    <div class="flex h-full flex-row bg-gray-700">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard /> }>
        </Route>
        <Route path="/Inbox" element={<Inbox class="flex flex-1 " />}>
        </Route>
        <Route path="/Searchagent" element={<Searchagent />}>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default Mainpage