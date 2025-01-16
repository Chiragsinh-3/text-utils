import { useState } from "react";
import Alert from "./Alert";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert();
  };
  const handleLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert();
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert();
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="h-[877px]"
        style={props.mode}
      >
        
        <div className="w-1/2 mx-auto py-8">
          <p className="text-2xl mb-4" style={props.mode}>
            ENTER YOUR TEXT BELOW
          </p>
          <textarea
            id="message"
            rows="20"
            className="block p-2.5 w-full text-sm text-black bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            value={text}
            onChange={handleOnChange}
            style={
              props.mode.backgroundColor === "rgb(28 33 39)"
                ? {
                    backgroundColor: "rgb(6 78 59 / 0.3)",
                    resize: "none",
                    color: "white",
                  }
                : { backgroundColor: "#10b98112", resize: "none" }
            }
          />
          <button
            type="button"
            className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleUp}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleLow}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleClear}
          >
            Clear
          </button>

          <p className="text-xl" style={props.mode}>
            Text Summary
          </p>
          <p className="text-l" style={props.mode}>
            {text === "" ? 0 : text.split(" ").length} Words and {text.length}{" "}
            Characters
          </p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
