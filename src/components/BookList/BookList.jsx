import React from "react";
import { useGlobalContext } from "../../context";
import Book from "./Book";
import Loading from "../Loader/Loader";
import coverImg from "../../image/404_page_cover.jpg";
import "./BookList.css";
//https://covers.openlibrary.org/b/id/240727-S.jpg
//https://covers.openlibrary.org/b/olid/OL7440033M-S.jpg

function BookList() {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksCover = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });
  console.log(booksCover);

  if (loading) return <Loading />;

  return (
    <div className="container">
      <div className="section-title">
        <h2>{resultTitle}</h2>
      </div>
      <div className="booklist-content grid">
        {booksCover.slice(0, 30).map((item, index) => {
          return <Book key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default BookList;
