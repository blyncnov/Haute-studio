import React from "react";

import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="Navigation__Container">
      <div className="Haute__maxout">
        <div className="Navigation__Column">
          <div className="Navigation__Logo">
            <h1>
              H<span>|Studio</span>
            </h1>
          </div>
          <ul className="Navigation__List">
            <li>Home</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Element</li>
            <li>Blocks</li>
            <button>Join Shoot</button>
          </ul>
          <div className="Navigation__Mobile">
            <FaBars style={{ fontSize: "1.5em" , color: "#333" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
