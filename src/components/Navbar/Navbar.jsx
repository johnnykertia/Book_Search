import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../image/Logoku.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const [toogleMenu, setToogleMenu] = useState(false);
  const handleNavbar = () => setToogleMenu(!toogleMenu);
  return (
    <div className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="site-log" />
            <span className="text-uppercase fw-7 fs-18">JohnBook</span>
          </Link>
          <button
            type="button"
            className="navbar-toogle-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: `${toogleMenu ? "#fff" : "#010101"}` }}
            />
          </button>
        </div>

        <div
          className={
            toogleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
