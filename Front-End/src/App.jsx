import React, { createContext,useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../public/css/App.css';
import Logo from '../components/Logo';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';
import NoPageFound from '../components/NoPageFound';
import Homepage from '../components/Homepage'; 

function App() { 
  return ( 
    <Router>
      <>
        <Routes>
          <Route path="*" element={<NoPageFound />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/" element={<Logo/>} />
          <Route path="/home/*" element={<Homepage />} /> 
        </Routes>
        
      </>
    </Router>




  )
}

export default App
