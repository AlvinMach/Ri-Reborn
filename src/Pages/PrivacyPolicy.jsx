import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 mb-10">
        <div>
          <h1 className="text-5xl font-bold px-8 mt-10 py-11">
            Ri Reborn's Private Notice
          </h1>
          <p className="text-4xl font-semibold px-7">Privacy Notice</p>
          <p className="px-7 mt-4">Last Updated 7 October 2024</p>
        </div>

        <section className="mt-12">
          <h2 className="font-semibold text-3xl px-7">1. Information We Collect</h2>
          <p className="px-8 mt-4">
            At Ri Reborn, we collect personal information such as your name, email address, and phone number when you interact with our website. This information helps us provide personalized services and improve your experience. We may also collect non-personal information such as IP addresses and browsing patterns through cookies to enhance website functionality.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-3xl px-7">2. How We Use Your Information</h2>
          <p className="px-8 mt-4">
            The information we collect is used to deliver services, process transactions, and communicate with you regarding your orders or inquiries. We may also use your data to send updates or promotional offers, but only with your explicit consent. Your privacy is important to us, and we take steps to ensure your data is handled responsibly.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-3xl px-7">3. Sharing Your Information</h2>
          <p className="px-8 mt-4">
            We do not sell or share your personal information with third parties, except for trusted partners who assist us in operating our website or conducting business. These partners are bound by confidentiality agreements to ensure the safety of your data.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-3xl px-7">4. Data Security</h2>
          <p className="px-8 mt-4">
            Ri Reborn implements industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of data transmission over the internet is completely secure, and we advise you to take precautions when sharing sensitive information online.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-semibold text-3xl px-7">5. Your Rights</h2>
          <p className="px-8 mt-4">
            You have the right to request access to, update, or delete your personal data at any time. If you wish to exercise any of these rights, please contact us, and we will respond promptly to your request. These brief sections cover the main aspects of privacy policies and can be customized to fit the specific needs of your website.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
