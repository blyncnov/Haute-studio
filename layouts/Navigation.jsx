import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="Navigation__Container">
      <div className="Haute__maxout">
        <div className="Navigation__Column">
          <div className="Navigation__Logo">
            <h1>
              H<span>|Studio</span>
            </h1>
          </div>
          <ul
            className={
              isClicked ? "Navigation__List active" : "Navigation__List"
            }
          >
            <li>Home</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Element</li>
            <li>Blocks</li>
            <button>Join Shoot</button>
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
  );
};

export default Navigation;
