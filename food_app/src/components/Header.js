import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/"><img className="logo w-32" src={LOGO_URL} /></Link>
      </div>
      <div className="nav-items flex items-center p-8 font-customFont text-xl">
        <ul className="flex">
          <li className="px-4 p-2 m-2 text-sm">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 p-2 m-2"><Link to="/">Home</Link></li>
          <li className="px-4 p-2 m-2"><Link to="/about">About Us</Link></li>
          <li className="px-4 p-2 m-2"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 p-2 m-2"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 p-2 m-2">Cart</li>
          <button
            className="login-btn px-5 text-xl text-black bg-transparent border-none font-medium cursor-pointer hover:text-orange-600"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 p-2 m-2 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
