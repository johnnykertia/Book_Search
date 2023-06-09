import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchFrom from "../../components/SearchFrom/SearchFrom";
import "./Header.css";

function Header() {
  return (
    <div className="holder">
      <div className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your book choice
          </h2>
          <br />
          <p className="header-text fs-15 fw-3">
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
          </p>
          <SearchFrom />
        </div>
      </div>
    </div>
  );
}

export default Header;
