import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl px-11 mb-6">
        <div>
          <h1 className="text-5xl font-bold px-8 mt-2 py-11">
            Ri Reborn's Private Notice
          </h1>
          <p className="text-4xl font-semibold px-7">Privacy Notice</p>
          <p className="px-7 mt-8">Last Updated 7 October 2024</p>
        </div>
        <div>
          <h1 className="font-semibold m-6 text-3xl">
            1. Information We Collect
          </h1>
          <p className="px-8">
            At Ri Reborn, we collect personal information such as your name,
            email address, and phone number when you interact with our website.
            This information helps us provide personalized services and improve
            your experience. We may also collect non-personal information such
            as IP addresses and browsing patterns through cookies to enhance
            website functionality.
          </p>
        </div>
        <div>
          <h1 className="font-semibold m-6 text-3xl">
            2. How We Use Your Information
          </h1>
          <p className="px-8">
            The information we collect is used to deliver services, process
            transactions, and communicate with you regarding your orders or
            inquiries. We may also use your data to send updates or promotional
            offers, but only with your explicit consent. Your privacy is
            important to us, and we take steps to ensure your data is handled
            responsibly.
          </p>
        </div>
        <div>
          <h1 className="font-semibold m-6 text-3xl">
            3. Sharing Your Information
          </h1>
          <p className="px-8">
            We do not sell or share your personal information with third
            parties, except for trusted partners who assist us in operating our
            website or conducting business. These partners are bound by
            confidentiality agreements to ensure the safety of your data.
          </p>
        </div>
        <div>
          <h1 className="font-semibold m-6 text-3xl">4. Data Security</h1>
          <p className="px-8">
            Ri Reborn implements industry-standard security measures to protect
            your personal information from unauthorized access, disclosure, or
            alteration. However, no method of data transmission over the
            internet is completely secure, and we advise you to take precautions
            when sharing sensitive information online.
          </p>
        </div>
        <div>
          <h1 className="font-semibold m-6 text-3xl">5. Your Rights</h1>
          <p className="px-8">
            You have the right to request access to, update, or delete your
            personal data at any time. If you wish to exercise any of these
            rights, please contact us, and we will respond promptly to your
            request. These brief sections cover the main aspects of privacy
            policies and can be customized to fit the specific needs of your
            website.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
