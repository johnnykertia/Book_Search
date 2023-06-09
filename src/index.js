import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetail from "./components/BookDetail/BookDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
