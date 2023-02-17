import { useState } from 'react';
import './App.css';
import About from './components/About';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode,setMode]=useState("light");
  const[alert,setalert]=useState(null);

  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    
     setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#33383c";
      showAlert("Dark Mode On","success");
      document.title="Dark mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Dark Mode Off","success");
      document.title="Light mode";
    }
  }
  return (
    <>    
    <Router>
      <Navbar title="textutils" mode={Mode} toggleMode={toggleMode}/>
      {/*<Navbar title="textutils"/>*/}
      <div className='container my-3'>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
  
          <Route exact path="/" element={
          <Textform heading2="Enter Text" heading1="Text Box" mode={Mode}/>}>
          </Route>
        </Routes>
        {/*<T1 heading2="About" heading1="About" mode={Mode}/>
        <Textform heading2="Enter Text" heading1="Text Box" mode={Mode}/>*/}
      </div>
      </Router>
    </>
  );
}

export default App;
