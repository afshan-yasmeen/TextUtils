import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";


const Layout = (props) => {
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
    
    //   Function to set the custom mode and background color
      const setCustomMode = (color, modeName) => {
        setMode(color);
        document.body.style.backgroundColor = color;
        document.title = "TextUtils, DarkMode";
        showAlert(
          `${modeName.charAt(0).toUpperCase() + modeName.slice(1)} mode is enabled`,
          "success"
        );
      };
    

  return (
    <>
       <Navbar
        title="TextUtils"
        about="About Us"
        firstBar="Home"
        colorMode={mode}
        setCustomMode={setCustomMode} // Pass the function correctly here
      />
      <Outlet />
    </>
  )
};

export default Layout;