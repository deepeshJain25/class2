import React, { useState } from "react";
import '../styles.css'

function CreateArea(props) {

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
