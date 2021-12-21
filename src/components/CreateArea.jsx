import React, { useState } from "react";
import '../styles.css'

function CreateArea(props) {

  const [note,setNote] = useState({
    title: '',
    content: ''
  })

  const [disable,setDisable] = useState(true)

  const handleChange = (e) => {
    setDisable(false)
    if(e.target.name === 'title'){
      setNote({...note, title: e.target.value})
    }
    if(e.target.name === 'content'){
      setNote({...note, content: e.target.value})
    } 
  }

  const handleClick = (e) => {
    e.preventDefault();
    setNote({
      title: '',
      content: ''
    })
    setDisable(true)
    props.onAdd(note)
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value = {note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows="3"
          value = {note.content}
        />
        <button onClick={handleClick} disabled={disable}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
