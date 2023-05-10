import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div>
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
