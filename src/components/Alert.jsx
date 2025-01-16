import React, { useEffect, useState } from "react";

const Alert = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, [props.mode]);

  if (!visible) return null;

  return (
    <div>
      <div
        id="alert-3"
        className={`flex items-center p-[15px] rounded-lg ${
          props.mode.backgroundColor === "rgb(28 33 39)"
            ? "text-green-400 bg-gray-800"
            : "text-green-800 bg-green-50"
        }`}
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ms-3 text-m font-medium">Success!</div>
        <button
          type="button"
          className={`ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 ${
            props.mode.backgroundColor === "rgb(28 33 39)"
              ? "bg-gray-800 text-green-400 focus:ring-green-400 hover:bg-gray-700"
              : "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200"
          }`}
          data-dismiss-target="#alert-3"
          aria-label="Close"
          onClick={() => setVisible(false)}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
