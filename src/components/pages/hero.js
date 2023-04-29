import React from 'react'
import axios from 'axios';
import { Link} from "react-router-dom";
import { useContext,useState } from 'react';
import noteContext from '../../Context/notes/NoteContext'
import Home from './Home';

function AddNote() {
  const context=useContext(noteContext);
    const{}=context;
    const[student,setStudent]=useState({
      stuname:"",
      email:''
    });
    const onChange=(e)=>{
      setStudent({...student,[e.target.name]:e.target.value})
  }
    const [status,setStatus]=useState();
  
    async function onFormSubmit(e){
      e.preventDefault()
      try{
        await axios.post(`http://localhost:3004/students/`,student)
      }catch(error){
        console.log('something is wrong');
      }
    }
  if(status){
    return <Home/>
  }
    
  return (
    <div className='col-md-4  mx-4'>
    <div className='container my-3'>
      <h2>Add a Note</h2>
      <form>
  <div className="mb-3 my-3 ">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="stuname" name='stuname' aria-describedby="emailHelp" onChange={e=>onChange(e)}/>
  </div>
  <div className="mb-3">
    <label for="description" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={e=>onChange(e)}/>
  </div>
  <button type="submit" className="btn btn-primary mx-4" onClick={e=>onFormSubmit(e)}>AddNote</button>
  <Link to="/"> 
  <button type='submit' className='btn btn-danger mx-4'>Back Home</button>

  </Link>
</form>

</div>
</div>
  )
}

export default AddNote
