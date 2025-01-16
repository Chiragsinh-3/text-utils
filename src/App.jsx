import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { CSSTransition } from "react-transition-group";
import "./App.css";

function App() {
  const [mode, setMode] = useState({
    backgroundColor: "rgb(224 247 240)",
    color: "black",
  });
  const [alertVisible, setAlertVisible] = useState(false);

  const toggleMode = () => {
    if (mode.backgroundColor === "rgb(224 247 240)") {
      setMode({
        backgroundColor: "rgb(28 33 39)",
        color: "white",
      });
    } else {
      setMode({
        backgroundColor: "rgb(224 247 240)",
        color: "black",
      });
    }
  };

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="alert-container">
        <CSSTransition
          in={alertVisible}
          timeout={300}
          classNames="slide"
          unmountOnExit
          
        >
          <Alert mode={mode} />
        </CSSTransition>
      </div>
      <TextForm mode={mode} showAlert={showAlert} alertVisible={alertVisible} />
    </>
  );
}

export default App;
