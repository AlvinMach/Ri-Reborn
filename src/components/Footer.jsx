import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../utils/AuthContextProvider";
import { FaFacebook, FaWhatsappSquare, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const { handlelogout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

 
 
  return (
    <>
      <footer className="max-w-[1640px] container mx-auto w-full bg-gray-200 py-10 px-6 mt-11">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="font-bold mb-4 text-3xl">Ri Reborn</h1>
            <h2 className="border-b-2 border-black text-red-400 text-2xl mb-4">
              Follow Us
            </h2>
            <ul className="flex justify-center md:justify-start space-x-4">
              <a href="https://wa.me/+263 77 723 9494">
                <FaWhatsappSquare size={30} className="hover:scale-105 duration-200" />
              </a>
              <a href="">
                <FaXTwitter size={30} className="hover:scale-105 duration-200" />
              </a>
              <a href="https://www.facebook.com/share/L5TEKUjX5CYe66gv/?mibextid=LQQJ4d">
                <FaFacebook size={30} className="hover:scale-105 duration-200" />
              </a>
              <a href=" https://www.instagram.com/reborninvestiments?igsh=MTczNDJobXEyMmFvcQ%3D%3D&utm_source=qr ">
                <FaSquareInstagram size={30} className="hover:scale-105 duration-200" />
              </a>
              <a href="">
                <FaPinterest size={30} className="hover:scale-105 duration-200" />
              </a>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24">
            <ul className="font-bold flex flex-col space-y-4 items-center md:items-start">
              <Link to="/" className="hover:text-red-500">Home</Link>
              <Link to="/About" className="hover:text-red-500">About</Link>
              <Link to="/Message" className="hover:text-red-500">Message Us</Link>
              <Link to="/Contact" className="hover:text-red-500">Contact Us</Link>
            </ul>

            <ul className="font-bold flex flex-col space-y-4 items-center md:items-start">
              <Link to="/Policy" className="hover:text-red-500">Privacy Policy</Link>
              <Link to="/Terms" className="hover:text-red-500">Terms of Services</Link>
            </ul>
          </div>

          <div className="text-center md:text-right mt-6 md:mt-0">
            <p className="text-sm">&copy; 2024, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
