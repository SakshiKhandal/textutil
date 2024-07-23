import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title = {"TextUtils"} aboutText = {"About Us"}/> */}
      <Navbar title="TextUtils" aboutText = {"About"} mode = {mode}  toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
    
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<AboutUs mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
        </Routes>
      {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
      </div>
    </Router>

    </>
  );
}


