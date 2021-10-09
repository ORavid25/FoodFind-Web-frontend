import React from "react";
import FoodFindLogo from "../assats/foodfind.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400 py-12 px-4 sm:px-6 lg:px-8">
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
          <form className="mt-14 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  אימייל
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-400  focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  סיסמא
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 ml-32 text-green-400 focus:ring-green-400 border-green-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  זכור אותי
                </label>
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"
              >
                התחבר
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// <div class="w-screen h-screen flex bg-green-500 justify-center items-center">
//       <div class=" w-11/12 h-5/6 rounded-xl bg-blue-600 flex justify-center items-center">
//         <h1 class="text-2xl bg-red-600">Login Screen</h1>
//         <h1 class="text-2xl bg-red-600">Login Screen</h1>
//         <h1 class="text-2xl bg-red-600">Login Screen</h1>
//         <h1 class="text-2xl bg-red-600">Login Screen</h1>
//         <h1 class="text-2xl bg-red-600">Login Screen</h1>
//         <h1 class="text-2xl bg-red-600">Login Screen</h1>
//       </div>
//     </div>
