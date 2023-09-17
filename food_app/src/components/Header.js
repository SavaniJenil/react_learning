import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  const { loggedInUser } = useContext(UserContext);

  //Selector:- Here we are subscribing to the store using selector
  const cartItems = useSelector((store) =>  store.cart.items );
  console.log(cartItems);

  return (
    <div className="header flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/"><img className="logo w-32" src={LOGO_URL} /></Link>
      </div>
      <div className="nav-items flex items-center p-8 font-customFont text-xl">
        <ul className="flex items-center">
          <li className="px-4 p-2 m-2 text-sm">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 p-2 m-2"><Link to="/">Home</Link></li>
          <li className="px-4 p-2 m-2"><Link to="/about">About Us</Link></li>
          <li className="px-4 p-2 m-2"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 p-2 m-2"><Link to="/grocery">Grocery</Link></li>
          <li className="px-2 p-1 m-1 flex flex-row items-center ">
          <Link className="flex flex-row items-center" to="/cart">
            <img className="h-7 w-7 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mfk2aYoKh0tPQGMm0YLXxubqCWMwy-zMTA&usqp=CAU" />
            <div className="h-7 w-7 text-center bg-red-700 rounded-full text-white">
              {cartItems.length}
              </div>
              </Link>
            </li>
          <button
            className="login-btn px-5 p-2 m-2 text-xl text-black bg-transparent border-none font-medium cursor-pointer hover:text-orange-600"
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
