import React from "react";
import Image from "next/image";

import { BsArrowRightCircle } from "react-icons/bs";
import { BiRightArrow } from "react-icons/bi";

import { FaDribbble, FaFacebookF, FaBehance } from "react-icons/fa";
import { SiAdobexd, SiAdobeillustrator } from "react-icons/si";

import Camera1 from "../public/assests/hh.webp";

const HeroSection = () => {
  return (
    <div className=" Haute__maxout">
      <div className="HeroSection__Section">
        <div className="HeroSection__Column">
          <div className="HeroSection__Column__Text">
            <h1>
              We all have a <span>photographic</span> memory JSYK 😂.
            </h1>

            <hr style={{ border: "0.1px solid #e5e2db" }} />

            <p>
              May would Say &quot;Photographer are Violent people People. First
              they Frame you, then Shoot you and then Hang you to the
              wall&quot; , Well thats true, No Objections, Get Fifty shades of
              Grey in hopes might help you understand White Balance , you might
              be very WRONG.
              <br />
            </p>

            <div className="HeroSection__Button__Layout">
              <button>
                Photoshoot <BsArrowRightCircle />
              </button>
              <button className="demo__btn">
                Request Demo <BiRightArrow />
              </button>
            </div>

            <div className="cap_icon">
              <a href="https://www.blyncnov.com/">
                <FaDribbble />
              </a>
              <a href="https://www.blyncnov.com/">
                <FaFacebookF />
              </a>
              <a href="https://www.blyncnov.com/">
                <FaBehance />
              </a>
              <a href="https://www.blyncnov.com/">
                <SiAdobexd />
              </a>
              <a href="https://www.blyncnov.com/">
                <SiAdobeillustrator />
              </a>
            </div>
          </div>
        </div>

        <div className="HeroSection__Column">
          <div className="HeroSection__Image">
            <Image src={Camera1} alt="camera" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
