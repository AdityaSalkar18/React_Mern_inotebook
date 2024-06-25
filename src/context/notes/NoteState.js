
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = 
        [
            {
              "_id": "6674042556add0e08d81835a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81831a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81832a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81833a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81834a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d818366a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81836a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81837a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81838a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6674042556add0e08d81839a",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New",
              "description": "Please wake up early",
              "tag": "personal",
              "date": "2024-06-20T10:27:49.968Z",
              "__v": 0
            },
            {
              "_id": "6676a9e701e12c2b340b075e",
              "user": "66729b21a151302214dbdbe6",
              "title": "My Title New 2",
              "description": "Please wake up early 2",
              "tag": "personal",
              "date": "2024-06-22T10:39:35.712Z",
              "__v": 0
            }
          ]
          const [notes, setNotes] = useState(notesInitial)
    
          //Add a Note
          const addNote = (title, description, tag) =>{
            // TODO API Call
            console.log("Adding a new note")
            const note = {
              "_id": "6676a9e701e12c2b340b075e",
              "user": "66729b21a151302214dbdbe6",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2024-06-22T10:39:35.712Z",
              "__v": 0
            };
            setNotes(notes.concat(note))

          }

          //Delete a Note
          const deleteNote = () =>{
            
          }

          //Edit a Note
          const editNote = () =>{

          }
    
    return(
        <NoteContext.Provider value={{notes, addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;