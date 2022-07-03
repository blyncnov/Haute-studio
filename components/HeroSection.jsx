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
              Create Your <span>Beautiful</span> Photography Website
            </h1>
            <hr />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              placeat sapiente nisi qui nulla doloremque officiis quod eius
              cumque ipsum impedit natus repellat, illo et necessitatibus
              suscipit! Ad, quas mollitia! Maxime, natus.
            </p>

            <div className="HeroSection__Button__Layout">
              <button>
                Photoshoot <BsArrowRightCircle />
              </button>
              <button className="demo__btn">
                Demo <BiRightArrow />
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
          <span>
            <Image src={Camera1} alt="camera" layout="responsive" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
