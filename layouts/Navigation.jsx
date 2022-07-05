import React, { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showBg, setShowBg] = useState(false);

  const handleClickToggle = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
          setShowBg(true);
        } else {
          setShowBg(false);
        }
      });
    }
  });

  return (
    <div className="Navigation__Fixed">
      <div
        className={
          showBg
            ? "Navigation__Container ShowNavigationBg"
            : "Navigation__Container"
        }
      >
        <div className="Haute__maxout">
          <div className="Navigation__Column">
            <div className="Navigation__Logo">
              <h1>
                H<span>|Studio</span>
              </h1>
            </div>
            <ul
              onClick={handleClickToggle}
              className={
                isClicked ? "Navigation__List active" : "Navigation__List"
              }
            >
              <li onClick={handleClickToggle}>Home</li>
              <li onClick={handleClickToggle}>Pages</li>
              <li onClick={handleClickToggle}>Blog</li>
              <li onClick={handleClickToggle}>Element</li>
              <li onClick={handleClickToggle}>Blocks</li>
              <button onClick={handleClickToggle}>Join Shoot</button>
            </ul>
            <div className="Navigation__Mobile" onClick={handleClickToggle}>
              {isClicked ? (
                <FaTimes style={{ fontSize: "1.8em", color: "#333" }} />
              ) : (
                <FaBars style={{ fontSize: "1.8em", color: "#333" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
