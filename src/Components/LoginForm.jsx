import React, { useState, useContext } from "react";
import FoodFindLogo from "../assats/foodfind.png";
import { LoginWithEmailAndPass } from "../api/BusinessUserController";
import { useHistory } from "react-router-dom";
import { FoodFindContext } from "../context";

const LoginForm = () => {
  const [details, setDetails] = useState({
    businessEmail: "",
    password: "",
  });

  const { user, setUser } = useContext(FoodFindContext);

  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    let res = await LoginWithEmailAndPass(
      details.businessEmail,
      details.password
    );

    if (res === "Conflict") {
      alert("אחד הפרטים לא נכון");
      return;
    }
    if (res !== undefined && res && res.isAdmin === 2) {
      setUser(res)
      history.push("/AdminPage");
      window.localStorage.setItem("user", JSON.stringify(res))
      return;
    }

    if (res !== null && res !== undefined && res !== "Conflict") {
      setUser(res)
      history.push("/");
      window.localStorage.setItem("user", JSON.stringify(res))
    }
  };

 
  return (
    <div className="bg-gray-200 p-14 rounded-2xl shadow-xl">
      <div className="max-w-md w-full">
        <div>
          <img
            className="mx-auto h-32 w-auto"
            src={FoodFindLogo}
            alt="Workflow"
          />
          <h2 className="mt-16 mb-14 text-center text-4xl  font-sans text-gray-900">
            התחבר כבעל עסק
          </h2>
        </div>
        <form className="mt-14 space-y-6" onSubmit={submitHandler}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-400  focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="אימייל"
                dir="rtl"
                onChange={(e) =>
                  setDetails({ ...details, businessEmail: e.target.value })
                }
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="סיסמא"
                dir="rtl"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
              />
            </div>
          </div>

         
          <div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"
              type="submit"
            >
              התחבר
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
