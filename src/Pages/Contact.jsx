import React from 'react'
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
   <>
   <Navbar/>
    <div className = "max-w-[1640px] px-8 py-2 flex justify-center ">
        <div className = "text-center flex flex-col space-y-4">
            <h1 className = "font-extrabold text-7xl  ">Contact Us</h1>
            <p><span className = "font-semibold text-lg">Contact Person:</span> Irvin Mazarire</p>
            <p><span className = "font-semibold text-lg">Address:</span> Number 3 Glasgow, Famona Bulawayo</p>
            <p><span className = "font-semibold text-lg">Contact mobile:</span> +263 775152331</p>
            <p><span className = "font-semibold text-lg">Other contact:</span> +263 785393253/+263 77 723 9494</p>
            <p><span className = "font-semibold text-lg">Email:</span>Izmazarire@yahoo.com </p>
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default Contact
