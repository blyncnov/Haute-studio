import React from "react";

import Navigation from "./Navigation";
import HeroSection from "../components/HeroSection";

const Header = () => {
  return (
    <div className="Header__Container">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default Header;
