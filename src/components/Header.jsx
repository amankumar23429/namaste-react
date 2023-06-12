import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="h-28" src={LOGO_URL}></img>
      </div>
      <div className="nav-container">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <div className="py-10 px-2">
        <span className="m-5 font-bold">{user.name}</span>
        {isLogin ? (
          <button
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
