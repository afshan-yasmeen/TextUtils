import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import Layout from "./components/Layout";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Function to set the custom mode and background color
  const setCustomMode = (color, modeName) => {
    setMode(color);
    document.body.style.backgroundColor = color;
    document.title = "TextUtils, DarkMode";
    setInterval(() => {
      document.title = "Install TextUtils Now";
    }, 2000);
    setInterval(() => {
      document.title = "TextUtils is Amazing";
    }, 1500);
    showAlert(
      `${modeName.charAt(0).toUpperCase() + modeName.slice(1)} mode is enabled`,
      "success"
    );
  };

  return (
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TextForm 
         showAlert={showAlert}  heading="Enter the text to analyze" colorMode={mode}
        />} />
         <Route path="about" element={<About  
         colorMode={mode}   setCustomMode={setCustomMode}
         />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
