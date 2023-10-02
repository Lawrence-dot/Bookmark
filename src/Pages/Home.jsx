import React from "react";
import Contact from "../Sections/Contact";
import Extensions from "../Sections/Extensions";
import Faqs from "../Sections/Faqs";
import Features from "../Sections/Features";
import Firstsection from "../Sections/Firstsection";
import Footer from "../Sections/Footer";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="Home text-blue-700">
      <Firstsection />
      <Features />
      <Extensions />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
