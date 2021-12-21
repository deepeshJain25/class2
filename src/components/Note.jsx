import React from "react";
import '../styles.css'

function Note(props) {
  return (
    <div className="note">
      <h1>Title</h1>
      <p>Content</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;
