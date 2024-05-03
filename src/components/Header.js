import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   const [btnName, setbtnName] = useState("Login");
   const onlineStatus = useOnlineStatus();
   return (
      <div className="flex justify-between shadow-md m-2 mb">
         <div className="logo-container">
            <img className="w-24" src={LOGO_URL} alt="logo" srcSet="" />
         </div>
         <div className="flex item-centre">
            <ul className="flex p-4 m-4">
               <li className="px-4">
                  Online status: {onlineStatus ? "🟢" : "🔴"}
               </li>
               <li className="px-4">
                  <Link className="remove-link" to="/">
                     Home
                  </Link>
               </li>
               <li className="px-4">
                  <Link className="remove-link" to="/about">
                     About
                  </Link>
               </li>
               <li className="px-4">
                  <Link className="remove-link" to="/contact">
                     Contact Us
                  </Link>
               </li>
               <li className="px-4">Cart</li>
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
