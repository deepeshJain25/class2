import React, {useState} from 'react';
import Note from "./Note"
import CreateArea from "./CreateArea";

const Keeper = (props) => {
    const [notes,setNotes] = useState([]);

    const getData = (note) => {
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
            <>  
            <h2 style={{textAlign:'center',marginTop:'10px'}}>Keeper App</h2>
                <CreateArea onAdd = {getData} />
                {allNotes}
            </>
        );
};
export default Keeper;