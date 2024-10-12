import React from "react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../utils/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { account } from "../config/config";

const Login = () => {
  const { handlelogin, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const googleAuth = (e) => {
    e.preventDefault();

    account.createOAuth2Session(
      "google",
      "https://ri-reborn.vercel.app/",
      "https://ri-reborn.vercel.app/"
    );
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handlelogin(e, credentials);
        }}
        className="bg-white shadow-lg flex justify-center flex-col items-center py-6 max-h-[600px] max-w-[500px] mt-8 mx-auto container"
      >
        <h1 className="text-black text-4xl font-extrabold mb-11">Ri Reborn</h1>
        <div>
          <label className="block  mb-4">Email</label>
          <input
            type="text"
            name="email"
            placeholder="enter email"
            value={credentials.email}
            onChange={handleinput}
            className="border p-3 w-[300px] rounded-sm"
          />
        </div>
        <div>
          <label className="block mt-6 mb-4">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={credentials.password}
            onChange={handleinput}
            className="border p-3 w-[300px] rounded-sm"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-gray-500 hover:bg-gray-400 mt-6 mb-4 px-6 py-2 w-[300px] rounded-lg  font-semibold"
        />
        <button
          onClick={(e) => googleAuth(e)}
          className="flex items-center justify-center mt-6 mb-4 px-6 py-2 w-[300px] bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google logo"
            className="w-16 h-6 mr-3"
          />
          <span className="text-gray-700 font-semibold">
            Sign in with Google
          </span>
        </button>

        <p className="text-lg">
          Not yet registered?
          <Link
            to="/Register"
            className="text-red-500 hover:text-red-700 px-2 cursor-pointer"
          >
            Sign up here
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
