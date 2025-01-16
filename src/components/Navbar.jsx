import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div
        className="sticky top-0 flex items-center justify-between w-screen max-w-full h-auto backdrop-blur-sm"
        style={
          props.mode.backgroundColor === "rgb(28 33 39)"
            ? { backgroundColor: "rgb(51, 55, 66)", color: "white" }
            : { backgroundColor: "rgb(16 185 129 / 0.3)" }
        }
      >
        <span className="py-5 ml-16 hover:border-b-2 hover:border-emerald-500 transition-all duration-150">
          <a
            className="text-2xl dark:bg-emerald-900/30"
            href="/text-utils"
          >
            Text Utils
          </a>
        </span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={props.toggleMode}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
      </div>
    </>
  );
};

export default Navbar;
