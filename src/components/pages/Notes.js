import {React,useContext} from 'react'
import NoteItem from './NoteItem'
import noteContext from '../../Context/notes/NoteContext'
function Notes() {
  const context=useContext(noteContext);
    const{students,setStudents}=context;
  return (
    <div>
      <div className='row my-3'>
      <h2>Your Notes</h2>
      {students.map((student,i)=>{
        return(
          <NoteItem key={i} student={student}/>
        )
      })}
      </div>

    

    </div>
  )
}

export default Notes
