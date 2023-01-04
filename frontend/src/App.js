import React from 'react'
import Loginpage from './components/Loginpage/Loginpage';
import Mainpage from './components/Mainpage/Mainpage';
import {
  Routes,
  Route,
} from 'react-router-dom';
import SignUpForm from './components/SignUpForm/SignUpForm';



const App = () => {
  return (
    <>

         <Routes>
           <Route path="/*" element={<Loginpage/> }>
           </Route>
           <Route path="/signuppage" element={<SignUpForm/> }>
           </Route>
           <Route path="/App/*" element={<Mainpage />}>
           </Route>
         </Routes>
    </>

  );
};

export default App;

