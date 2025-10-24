import Alert from './Alert';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
//import About from './components/About';

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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText="About Textutils"/>
<Navbar /> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
 <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
{/* <About/> */}
</div>
    </>

  );
}

export default App;
