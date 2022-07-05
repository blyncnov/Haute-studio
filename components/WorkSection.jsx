import Image from "next/image";
import React from "react";

import imageOne from "../public/assests/1.jpeg";
import imageTwo from "../public/assests/2.webp";
import imageThree from "../public/assests/4.jpeg";

const WorkSection = () => {
  return (
    <div>
      <div className="Work__Container">
        <div className="Haute__maxout">
          <div className="Work__Section">
            <div className="Work__Grid">
              <div className="Work__Box">
                <div className="Image__Container">
                  <Image src={imageOne} alt="editing" />
                </div>
                <h1>EDITING</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima harum ut, cum saepe quisquam tempora laudantium id
                  necessitatibus autem consequatur!
                </p>
              </div>
              <div className="Work__Box">
                <div className="Image__Container">
                  <Image src={imageTwo} alt="shooting" />
                </div>
                <h1>SHOOTING</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima harum ut, cum saepe quisquam tempora laudantium id
                  necessitatibus autem consequatur!
                </p>
              </div>
              <div className="Work__Box">
                <div className="Image__Container">
                  <Image src={imageThree} alt="Videos" />
                </div>
                <h1>VIDEOS</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima harum ut, cum saepe quisquam tempora laudantium id
                  necessitatibus autem consequatur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
