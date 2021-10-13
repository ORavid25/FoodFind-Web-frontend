import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../Style/style.css";

export const Navbar = () => {

  const [homeBtn, setHomeBtn] = useState(false);
  const [businessBtn, setBusinessBtn] = useState(false);
  const [statusBtn, setStatusBtn] = useState(false);
  const [reportsBtn, setReportsBtn] = useState(false);

  return (
    <div className="flex justify-center p-7 bg-green-500 flex-col space-y-20 h-full rounded-3xl shadow-lg ">
      {/* כפתור בית */}
      <Link
        to="/"
        onClick={() => setHomeBtn(!homeBtn)}
        className="flex justify-center items-center w-24 h-24 text-black  opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-4 duration-300"
      >
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </Link>
      {/* כפתור עדכון דף עסק' */}
      <Link
        to="/2"
        onClick={() => setBusinessBtn(!businessBtn)}
        className="flex justify-center items-center w-24 h-24 text-black  opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-4 duration-300"
      >
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>
        </a>
      </Link>
      {/* כפתור לדף תפריט */}
      <Link
        to="/businessMenu"
        onClick={() => setStatusBtn(!statusBtn)}
        className="flex justify-center items-center w-24 h-24  text-black opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-4 duration-300"
      >
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
      {/* כפתור הפקת דוחות */}
      <Link
        to="/4"
        onClick={() => setReportsBtn(!reportsBtn)}
        className="flex justify-center items-center w-24 h-24  text-black opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-4 duration-300"
      >
        <a href="/#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </a>
      </Link>
    

    </div>
  );
};
export default Navbar;
