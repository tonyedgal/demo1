import React from "react";
import { notes } from "./data/Notes";

export default function App() {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.details}</h2>
          <p>{note.details}</p>
          <p>{note.category}</p>
          <p>{note.id}</p>
        </div>
      ))}
    </div>
  );
}
