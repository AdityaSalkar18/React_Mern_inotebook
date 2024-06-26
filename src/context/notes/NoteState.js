
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Get  all  Note
    const getNotes =  async () =>{
      
       //API Call
        
       const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method: 'GET',
        headers:{
          'Content-Type' : 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjliMjFhMTUxMzAyMjE0ZGJkYmU2In0sImlhdCI6MTcxODc4ODY3NX0.YCv4YMx_I52uPVWkCGqop2Ctmg_I6YvarXioVdvPSNU"
        }
       
      });
      
      const json = await response.json()
      console.log(json)
      setNotes(json)

    }

    
          //Add a Note
          const addNote =  async (title, description, tag) =>{
            // TODO API Call
             //API Call
              
             const response = await fetch(`${host}/api/notes/addnote`,{
              method: 'POST',
              headers:{
                'Content-Type' : 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjliMjFhMTUxMzAyMjE0ZGJkYmU2In0sImlhdCI6MTcxODc4ODY3NX0.YCv4YMx_I52uPVWkCGqop2Ctmg_I6YvarXioVdvPSNU"
              },
              body: JSON.stringify(title, description, tag)
            });
           
            

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
          const deleteNote = (id) =>{
            //TODO: API Call
            console.log("Deleting the note with id" + id)
            const newNotes = notes.filter((note) => {return note._id!==id})
            setNotes(newNotes)
            
          }

          //Edit a Note
          const editNote = async (id, title, description, tag) =>{
            //API Call
              
            const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
              method: 'POST',
              headers:{
                'Content-Type' : 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3MjliMjFhMTUxMzAyMjE0ZGJkYmU2In0sImlhdCI6MTcxODc4ODY3NX0.YCv4YMx_I52uPVWkCGqop2Ctmg_I6YvarXioVdvPSNU"
              },
              body: JSON.stringify({title, description, tag})
            });
           
            const json = response.json();
            
            //Logic to edit client
            for (let index = 0; index < notes.length; index++) {
              const element = notes[index];
              if(element._id == id){
                element.title = title;
                element.description = description;
                element.tag = tag;
              } 
            }
          }
    
    return(
        <NoteContext.Provider value={{notes, addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;