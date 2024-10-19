import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import AddMine from "./Pages/AddMine";
import Messages from "./Pages/Messages";
import PrivateRoutes from "./components/PrivateRoutes";
import Register from "./Pages/Register";
import PageNotfound from "./Pages/PageNotfound";
import Mainlayouts from "./layouts/Mainlayouts";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import Gemstones from "./Pages/Gemstones";
import Mines from "./Pages/Mines";
import Worksuits from "./Pages/Worksuits";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Section />
              <Mainlayouts />
            </>
          }
        />
        <Route element={<PrivateRoutes />}>
          <Route path="/add" element={<AddMine />} />
          <Route path="/Message" element={<Messages />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />

        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/mines" element={<Mines />} />
        <Route path="/protectivewear" element={<Worksuits />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
