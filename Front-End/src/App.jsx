import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../public/css/App.css';
import Logo from '../components/Logo';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';
import NoPageFound from '../components/NoPageFound';

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="*" element={<NoPageFound />} />
          <Route path="/" element={<Logo/>} />
          <Route path="/home" element={<Logo/>} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
