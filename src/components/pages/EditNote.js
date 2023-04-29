import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext,useEffect,useState } from 'react';
import noteContext from '../../Context/notes/NoteContext'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function EditNote() {
  const context=useContext(noteContext);
    const{}=context;
    const {id}=useParams();
    const history=useNavigate();
    const[student,setStudent]=useState({
      id:"",
      stuname:"",
      email:''
    });
  useEffect(()=>{
    async function getStudent(){
      try{
        const student=await axios.get(`http://localhost:3004/students/${id}`)
        setStudent(student.data);
      } catch (error){
        console.log('Something is Wrong');
      }
    }
    getStudent();
  },[id])

  function onChange(e){
    setStudent({...student,[e.target.name]:e.target.value})
     console.log(student);
}
  async function onFormSubmit(e){
    e.preventDefault()
    try{
      await axios.put(`http://localhost:3004/students/${id}`,student)
      history.push("/")
    }catch(error){
      console.log('something is wrong');
    }
  }
  
  
  return (
    <div className='container my-3'>
    <form>
<div className="mb-3 my-3">
  <label for="title" className="form-label">Name</label>
  <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={student.stuname} onChange={e=>onChange(e)}/>
</div>
<div className="mb-3">
  <label for="description" className="form-label">Email</label>
  <input type="text" className="form-control" id="description" name='description' value={student.email} onChange={e=>onChange(e)}/>
</div>
<button type="submit" className="btn btn-primary" onClick={e=>onFormSubmit(e)}>Update</button>
<Link to ="/" className='btn btn-danger ml-2 mx-4'>Cancel</Link>
</form>

</div>
  )
}

export default EditNote
