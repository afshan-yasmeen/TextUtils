// import PropTypes from "prop-types";
import { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = (event) => {
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case! ", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowClick = (event) => {
    event.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case! ", "success");
  };

  const handleSentenceCase = (event) => {
    event.preventDefault();
    text.toLowerCase();
    let sentenceCase = text.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
      c.toUpperCase()
    );
    setText(sentenceCase);
    props.showAlert("Converted to Sentence Case! ", "success");
  };

  const handleClearText = (event) => {
    event.preventDefault();
    setText("");
    props.showAlert("Text is cleared! ", "success");
  };

  const handleCopyText = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to CLipboard! ", "success");
  };

  const speakText = (event) => {
    event.preventDefault();
    let msg = new SpeechSynthesisUtterance(text);
    msg.text = text;
    msg.lang = "en-US";
    msg.rate = 0.5;
    window.speechSynthesis.speak(msg);
  };

  const toCapitalizeCase = (event) => {
    event.preventDefault();
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(" ")
    );
    props.showAlert("Converted to Capitalize Case! ", "success");
  };

  const [text, setText] = useState("Enter text here ...");

  return (
    <>
      <div
        className={`container text-${props.colorMode === "light" ? "dark" : "light"}`}
      >
        <form>
          <div className={`form-group`}>
            <h1>{props.heading}</h1>
            <textarea
              className={`form-control  text-${props.colorMode === "light" ? "dark" : "light"}`}

              style={{backgroundColor: props.colorMode === "light" ? "light" : props.colorMode
             }}

              id="myBox"
              rows={8}
              placeholder="Enter text ...."
              value={text}
              onChange={handleOnChange}
            />
            <button className="btn btn-primary my-3" onClick={handleUpClick}>
              UpperCase
            </button>
            <button
              className="btn btn-primary my-3 mx-1"
              onClick={handleLowClick}
            >
              LowerCase
            </button>
            <button
              className="btn btn-primary my-3 mx-1"
              onClick={handleSentenceCase}
            >
              SentenceCase
            </button>
            <button
              className="btn btn-primary my-3 mx-1"
              onClick={toCapitalizeCase}
            >
              Capitalize
            </button>
            <button className="btn btn-primary my-3 mx-1" onClick={speakText}>
              Speak
            </button>
            <button
              className="btn btn-primary mx-1 my-3"
              onClick={handleCopyText}
            >
              Copy text
            </button>
            <button
              className="btn btn-primary my-3 mx-1"
              onClick={handleClearText}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div
        className={`container text-${props.colorMode === "light" ? "dark" : "light"}`}
      >
        <h3>Text Summary:</h3>
        <p>
          Words Count: {text.split(" ").length} | Character Count: {text.length}{" "}
          |
        </p>
        <p> {0.008 * text.split(" ").length} minutes read </p>

        <h2>Preview: </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
