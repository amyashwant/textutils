import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <div className="container mb-3">
      <Navbar title="React" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text to be analysed" mode={mode} showAlert={showAlert} />
      {/* <About mode={mode}/> */}
        {/* <Router>
        
        
          <Routes>
            <Route path='/' element={}/>
            <Route path='/about' element={}/>
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
