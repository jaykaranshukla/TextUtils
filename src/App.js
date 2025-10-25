import Alert from './Alert';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const[mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#072a47ff';
      showAlert("Dark mode is enabled","success");
      // document.title='TextUtils -Darkmode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
      // document.title='TextUtils -Lightmode';
    }
  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText="About Textutils"/>
<Navbar /> */}
  <Router>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
  <Route path="/about" element={<About mode={mode}/>} />
  <Route path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
</Routes>
</div>
        </Router>
    </>

  );
}

export default App;
