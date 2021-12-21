import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./CreateArea";
import '../styles.css'

function App() {

  const [notes,setNotes] = useState([]);

  const getData = (note) => {
    console.log('App', note)
    setNotes([...notes, note]);
  }

  const deleteNote = (index) => {
    setNotes(prev => {
      const newNotes = prev.filter((note,i)=> {
        if(i === index) return false;
        return true
      })
      return newNotes
    })
  }

  const allNotes = notes.map((note,index)=>{
    return <Note title={note.title} content={note.content} key={index} id={index} delete={deleteNote}/>
  })
  
  return (
    <div>
      <Header />
      <CreateArea onAdd = {getData} />
      {allNotes}
      <Footer />
    </div>
  );
}

export default App;
