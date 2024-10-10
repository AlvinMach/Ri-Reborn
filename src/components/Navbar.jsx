import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../utils/AuthContextProvider";
import { teams, account } from '../config/config';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaMessage } from "react-icons/fa6";
import { PiQuestionMarkFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io"


const Navbar = () => {
  const { user, handlelogout } = useContext(AuthContext);
  const [isadmin, setIsadmin] = useState(null);
  const [isnav, setIsnav] = useState(false);

  const toggleMenu = () => {
    setIsnav(!isnav);
  };

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = await account.get();
        const userid = user.$id;

        const memberships = await teams.listMemberships('66f81b3b002cda189895');
        const adminStatus = memberships.memberships.some(
          (member) => member.userId === userid && member.roles.includes('admin')
        );
        setIsadmin(adminStatus);
      } catch (error) {
        console.error(error);
      }
    };

    checkAdmin();
  }, []);

  return (
    <>
      <nav className=" max-w-[1640px] mx-auto container px-4 md:px-6 lg:px-[100px] py-4 bg-white sticky top-0 z-10">
        <div className="max-w-[1640px] flex justify-between items-center">
          <div className="flex flex-row items-center">
            <h1 className="font-bold max-w-lg">Ri REBORN</h1>
          </div>
          <ul className="hidden md:flex px-11 md:space-x-11 md:items-center md:justify-center mb-4 mt-3 text-center">
            <Link className="text-lg hover:text-red-600 font-semibold" to="/">Home</Link>
            <Link to="/About" className="text-lg hover:text-red-600 font-semibold">About</Link>
            <Link to="/Message" className="text-lg hover:text-red-600 font-semibold">Message</Link>
            {isadmin ? (
              <Link to="/add">
                <button className="hidden md:block bg-black text-white px-8 py-3 rounded-sm">Add New</button>
              </Link>
            ) : null}
          </ul>
          <div>
            {user ? (
              <button
                onClick={handlelogout}
                className="bg-gray-600 rounded-lg px-10 py-2 text-white hover:bg-gray-200 hidden md:block font-semibold text-lg"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="hidden md:block  hover:bg-blue-200 text-black border border-blue-400 rounded-lg px-10 py-2 font-semibold  text-lg">
                  Login
                </button>
              </Link>
            )}
            <AiOutlineMenu className="md:hidden" onClick={toggleMenu} />
            {isnav ? (
              <div className="bg-black/50 fixed z-10 top-0 left-0 w-full h-screen" onClick={toggleMenu}></div>
            ) : null}
            <div className={isnav ? "bg-white shadow-md fixed h-screen w-[350px] top-0 z-10 left-0" : "bg-white shadow-md fixed h-screen w-[400px] top-0 z-10 left-[-100%]"}>
              <AiOutlineClose size={20} className="mt-4 ml-2" onClick={toggleMenu} />
              <ul className="flex flex-col p-6 space-y-8">
              <Link className="text-lg hover:text-red-600 font-semibold flex items-center space-x-4" to="/"> <IoMdHome  size = {30} className = "mr-4"/> Home</Link>
                <Link className="text-lg hover:text-red-600 font-semibold flex items-center space-x-4" to="/About"> <PiQuestionMarkFill size = {30}  className = "mr-4" /> About</Link>
                <Link className="text-lg hover:text-red-600 font-semibold flex items-center space-x-4" to="/Message"> <FaMessage size = {30}  className = "mr-4"/> Message</Link>
             
                {isadmin ? (
                  <Link to="/add">
                    <button className="hover:bg-blue-200 text-black border border-blue-400 rounded-lg px-10 py-2 font-semibold  text-lg">Add New</button>
                  </Link>
                ) : null}
                {user ? (
                  <button
                    onClick={handlelogout}
                    className="bg-gray-600 rounded-lg px-6 py-2 text-white hover:bg-gray-200 font-semibold text-lg"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="hover:bg-blue-200 text-black border border-blue-400 rounded-lg px-10 py-2 font-semibold  text-lg">Login</button>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
