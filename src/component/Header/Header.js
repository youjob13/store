import React from "react";
import logo from "../../assets/img/logo.jpg";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} />
      </div>

      <nav class="navbar" role="navigation">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" >Footwear</a></li>
          <li className="nav-item"><a href="/" >Clothing</a></li>
          <li className="nav-item"><a href="/" >Accessories</a></li>
          <li className="nav-item"><a href="/" >Brands</a></li>
          <li className="nav-item"><a href="/" >Clearance</a></li>
        </ul>
      </nav>

      <div className="menu">
        <div className="menu-item search">
          <span>Search</span>
        </div>
        <div className="menu-item cart">
          <span>Cart</span>
        </div>
        <div className="menu-item sign-in">
          <span>Sign In</span>
        </div>
      </div>

    </header>
  );
};
export default Header;
