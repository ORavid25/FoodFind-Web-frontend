import React, { useContext, useEffect } from "react";
import Logo from "../assats/foodfind.png";
import { FoodFindContext } from "../context";
import { useHistory } from "react-router-dom";
import { retrieveLocalStorageData } from "../utility/localStorage";

export const Header = () => {
  const { user, setUser } = useContext(FoodFindContext);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const userData = await retrieveLocalStorageData("user");
      console.log(userData);
      await setUser(userData);
    })();
  }, []);

  const Logout = () => {
    window.localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <div className="flex w-auto h-20 m-5 rounded-3xl bg-gray-300 shadow-xl sticky justify-evenly">
      <a
        href="/login"
        onClick={Logout}
        className="flex justify-center items-center w-20 h-20 text-black  opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:translate-x-3 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 ml-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </a>
      <span className="flex justify-center items-center ml-96 ">
        שלום {user ?user.businessName : null}
      </span>
      <img src={Logo} alt="Logo" className="ml-auto mr-5" />
    </div>
  );
};

export default Header;
