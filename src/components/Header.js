import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
   const [btnName, setbtnName] = useState("Login");
   return (
      <div className="header">
         <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" srcSet="" />
         </div>
         <div className="nav-items">
            <ul>
               <li>
                  <Link className="remove-link" to="/">
                     Home
                  </Link>
               </li>
               <li>
                  <Link className="remove-link" to="/about">
                     About
                  </Link>
               </li>
               <li>
                  <Link className="remove-link" to="/contact">
                     Contact Us
                  </Link>
               </li>
               <li>Cart</li>
               <button
                  className="login"
                  onClick={() =>
                     btnName === "Logout"
                        ? setbtnName("Login")
                        : setbtnName("Logout")
                  }
               >
                  {btnName}
               </button>
            </ul>
         </div>
      </div>
   );
};

export default Header;
