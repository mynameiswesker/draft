import React from "react";
import { Link } from "react-router-dom";

const Topmenu = () => {
    return (
      <React.Fragment>
          <div className="Topmenu">
              <ul>
                  <li><Link to="/">Logo</Link></li>
                  <li><Link to="/Items/">Items</Link></li>
                  <li><Link to="/Heroes/">Heroes</Link></li>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Combo/">Combo picks</Link></li>
              </ul>
              <div className="left_menu"></div>
          </div>
      </React.Fragment>
    );
  };
  
  export default Topmenu;