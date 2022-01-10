import React, { useState, useEffect } from "react";

const books = [
  {
    title: "Summer on the Bluffs: A Novel",
    author: "Sunny Hostin",
    price: 22.49,
    img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614716333-511IwbqPJNL.jpg?crop=1xw:0.984xh;center,top&resize=768:*",
  },
  {
    title: "With Teeth: A Novel",
    author: "Kristen Arnett",
    price: 23.99,
    img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614717493-41ZofLOnJTL.jpg?crop=1xw:0.993xh;center,top&resize=768:*",
  },
  {
    title: "That Summer: A Novel",
    author: "Jennifer Weiner",
    price: 20.82,
    img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614715943-41CMyOhC3oL.jpg?crop=1xw:0.993xh;center,top&resize=768:*",
  },
];

const BookList = ({ books }) => {
  const [data, setData] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const sortBooks = (type) => {
      const types = {
        high: "high",
        low: "low",
      };
      const sortPrice = types[type];
      const sorted = [...books].sort((a, b) => {
        if (sortPrice === "high") {
          return b[sortPrice] - a[sortPrice];
        } else if (sortPrice === "low") {
          return a[sortPrice] - b[sortPrice];
        }
      });
      setData(sorted);
    };
    sortBooks(sort);
  });
  return (
    <>
      {/* HTML markup has been added for you. You should write the handler logic */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <label style={{ marginRight: "5px" }} htmlFor="sort">
          Sort Price{" "}
        </label>
        <select
          onChange={(e) => setSort(e.target.value)}
          onBlur={(e) => setSort(e.target.value)}
          name="sort"
          id="sort"
        >
          <option value=""></option>
          <option value="high">Highest</option>
          <option value="low">Lowest</option>
        </select>
      </div>
      <ul>
        {books.map((book) => (
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

//
