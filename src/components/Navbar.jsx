import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthContextProvider";
import { teams, account } from "../config/config";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchItems from "./SearchBar/SearchItems";

const Navbar = () => {
  const { user, handlelogout } = useContext(AuthContext);
  const [isadmin, setIsadmin] = useState(false);
  const [isnav, setIsnav] = useState(false);

  const toggleMenu = () => {
    setIsnav((prev) => !prev);
  };

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = await account.get();
        const userid = user.$id;

        const memberships = await teams.listMemberships("66f81b3b002cda189895");
        const adminStatus = memberships.memberships.some(
          (member) => member.userId === userid && member.roles.includes("admin")
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
      <nav className="max-w-[1640px] mx-auto container px-4 md:px-6 lg:px-[100px] py-4 bg-white sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
           <Link to = "/"> <h1 className="font-bold text-xl">Ri REBORN</h1></Link>
            <ul className="hidden lg:flex px-11 lg:space-x-11 items-center mb-4 mt-3">
              <Link className="text-lg hover:text-red-600 font-semibold" to="/">Home</Link>
              <Link className="text-lg hover:text-red-600 font-semibold" to="/About">About</Link>
              <Link className="text-lg hover:text-red-600 font-semibold" to="/Message">Message</Link>
              {isadmin && (
                <Link to="/add">
                  <button className="bg-black text-white px-8 py-3 rounded-sm">Add New</button>
                </Link>
              )}
            </ul>
          </div>

          <div className="flex items-center">
            <SearchItems />
            {user ? (
              <button
                onClick={handlelogout}
                className="bg-gray-600 rounded-lg px-10 py-2 text-white hover:bg-gray-200 hidden md:block font-semibold text-lg"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="hidden md:block hover:bg-blue-200 text-black border border-blue-400 rounded-lg px-10 py-2 font-semibold text-lg">
                  Login
                </button>
              </Link>
            )}
            <AiOutlineMenu className="md:hidden cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isnav && (
          <div className="bg-black/50 fixed z-10 top-0 left-0 w-full h-screen" onClick={toggleMenu}></div>
        )}
        
        {/* Mobile Navigation Menu */}
        <div
          className={`bg-white shadow-md fixed h-screen w-[350px] top-0 z-20 left-0 transition-transform duration-300 ease-in-out ${isnav ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <AiOutlineClose
            size={20}
            className="mt-4 ml-2 cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="flex flex-col p-6 space-y-8">
            <Link className="text-lg hover:text-red-600 font-semibold" to="/">Home</Link>
            <Link className="text-lg hover:text-red-600 font-semibold" to="/About">About</Link>
            <Link className="text-lg hover:text-red-600 font-semibold" to="/Message">Message</Link>
            {isadmin && (
              <Link to="/add">
                <button className="bg-black text-white px-8 py-3 rounded-sm">Add New</button>
              </Link>
            )}
            {user ? (
              <button
                onClick={handlelogout}
                className="bg-gray-600 rounded-lg px-6 py-2 text-white hover:bg-gray-200 font-semibold text-lg"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="font-semibold text-black text-lg">Login</button>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
