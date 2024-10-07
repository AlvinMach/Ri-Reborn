import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <>
      <Navbar/>
       <div className = "max-w-7xl px-11 ml-11 py-8 flex flex-col space-y-6">
       <div  className = "">
          <h1 className="text-5xl font-bold  mb-4 ">
            Ri Reborn's Terms of Use
          </h1>
          <p className="text-4xl font-semibold ">Terms of Use</p>
          <p className="mt-8">Last Updated 7 October 2024</p>
        </div>
           <div>
              <h1 className = "text-3xl font-semibold mb-2">1. Introduction</h1>
              <p className = "">Welcome to Ri Reborn. By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service. Ri Reborn provides a platform for selling products like mines, gemstones, and protective wear. Please read these terms carefully before using our services.</p>
           </div>
           <div>
              <h1 className = "font-semibold mb-2 text-3xl">2. Acceptance of Terms</h1>
              <p>By accessing the Ri Reborn website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you must stop using the site immediately.</p>
           </div>
           <div>
              <h1 className = "font-semibold mb-2 text-3xl">3. Modifications to Terms</h1>
              <p>Ri Reborn reserves the right to modify or update these Terms of Service at any time. Any changes will be posted on this page, and your continued use of the website following the updates signifies your acceptance of the revised terms.</p>
           </div>
           <div>
              <h1 className = "font-semibold mb-2 text-3xl">4. User Responsibilities</h1>
              <p>As a user of Ri Reborn, you agree to use the site responsibly, without engaging in any unlawful activities or actions that could harm the website or its users. Any violation of these terms may result in termination of your access to our services..</p>
           </div>
           <div>
              <h1 className = "font-semibold mb-2 text-3xl">5. Termination</h1>
              <p>We reserve the right to terminate or suspend your access to Ri Reborn at any time for breach of these terms or any other reason deemed necessary to maintain the security and integrity of the platform.</p>
           </div>
           <div>
              <h1 className = "font-semibold mb-2 text-3xl">6. Governing Law</h1>
              <p>These Terms of Service are governed by and construed in accordance with the laws of Zimbabwe, and any disputes arising from these terms shall be resolved in the courts of Zimbabwe.</p>
           </div>
       </div>
       <Footer/>
    </>
  )
}

export default Terms
