import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

import Home from './components/dashboard/Home';
import Profile from './components/dashboard/Profile';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/home" index element={<Home />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}






export default App;
