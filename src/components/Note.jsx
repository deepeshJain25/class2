import React from "react";
import '../styles.css'

function Note(props) {
  const handleDelete = () => {
    props.delete(props.id)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
