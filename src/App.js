import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {
  const[mode ,setMode] = useState('light');
  const[alert,setAlert]= useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null)
    },2000);
  }

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className='container my-3'>
    
    <Routes>
      <Route path="/" element={<Textform showAlert={showAlert} Heading='Enter text to analyse' mode={mode}/>} />
    </Routes>
    <Routes>
        <Route path="/about" element={<About  mode={mode}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

