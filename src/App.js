import React, { useState } from "react";

const BookList = ({ books }) => {
  const [sort, setSort] = useState();

  const handleChange = (e) => {
    const { value } = e.target;

    if (value === "high") {
      setSort(true);
    } else if (value === "low") {
      setSort(false);
    }
  };

  return (
    <>
      {/* HTML markup has been added for you. You should write the handler logic */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <label style={{ marginRight: "5px" }} htmlFor="sort">
          Sort Price{" "}
        </label>
        <select name="sort" id="sort" onChange={handleChange}>
          <option value=""></option>
          <option value="high">Highest</option>
          <option value="low">Lowest</option>
        </select>
      </div>
      <ul>
        {sort
          ? books
              .sort((a, b) => b.price - a.price)
              .map((book) => (
                <li
                  key={book.title}
                  style={{ display: "flex", marginBottom: "20px" }}
                >
                  <div style={{ marginRight: "30px" }}>
                    <img height="200px" src={book.img} />
                  </div>
                  <div>
                    <h1>{book.title}</h1>
                    <h4>{book.author}</h4>
                    <p>{book.price}</p>
                  </div>
                </li>
              ))
          : books
              .sort((a, b) => a.price - b.price)
              .map((book) => (
                <li
                  key={book.title}
                  style={{ display: "flex", marginBottom: "20px" }}
                >
                  <div style={{ marginRight: "30px" }}>
                    <img height="200px" src={book.img} />
                  </div>
                  <div>
                    <h1>{book.title}</h1>
                    <h4>{book.author}</h4>
                    <p>{book.price}</p>
                  </div>
                </li>
              ))}
      </ul>
    </>
  );
};
export default BookList;
