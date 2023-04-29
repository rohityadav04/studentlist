import React from 'react'
import { Link } from 'react-router-dom'
function NoteItem(props) {
  const {student}=props;

  return (
    <div className='col-md-4'>
      <div className="card my-3">
        <div className="card-body">
            <div className='d-flex align-items-center '>
    <h5 className="card-title">{student.stuname}</h5>
    <Link to={`/editnote/${student.id}`}><i className="btn btn-warning mx-4"> Edit</i></Link>
    <i className="btn btn-danger mx-4" >Delete</i>
    </div>
    <p className="card-text">{student.email}</p>
    
  </div>
</div>
    </div>
  )
}

export default NoteItem
