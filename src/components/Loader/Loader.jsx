import React from "react";
import { Link } from "react-router-dom";
import loaderGambar from "../../image/loading.jpg";
import "./Loader.css";

function Loader(book) {
  return (
    <div className="loader flex flex-c">
      <div className="book-item-img">
        <img src={loaderGambar} alt="loader" />
      </div>
    </div>
  );
}

export default Loader;
