import { useContext, useState } from "react";
import dataContext from "../context/datacontext";
import "../css/BookCard.css";
const BookCard = () => {
  const { books, setBooks } = useContext(dataContext);
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="container">
      <div className="sidemenu">
        <header>Book by Genre </header>
        <ul className="items">
          <li>All Genre</li>
          <li>Business</li>
          <li>Science</li>
          <li>Fiction</li>
          <li>Philosophy</li>
          <li>Biology</li>
        </ul>
      </div>

      <div className="container_items">
        <div className="container_first">
          <h1 className="first_title">Recommended</h1>
          <div className="main_container">
            {books.map((book, index) => (
              <div key={index} className="book_card">
                {book.volumeInfo && book.volumeInfo.imageLinks && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="book_image"
                  />
                )}
                <div className="book_card_details">
                  <h4>{book.volumeInfo.title}</h4>
                  <p>{book.volumeInfo.authors}</p>
                  <p>
                    {readMore
                      ? book.volumeInfo.description
                      : `${book.volumeInfo.description.substring(0, 200)}...`}
                    <button style={{width:"100px"}} onClick={() => setReadMore(!readMore)}>
                      {readMore ? "show less" : "read more"}
                    </button>
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
