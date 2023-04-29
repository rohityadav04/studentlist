import {React,useState,useEffect} from 'react'
import axios from 'axios';
import NoteContext from './NoteContext';
import Home from '../../components/pages/Home';
import AddNote from '../../components/pages/AddNote';
import { useParams } from 'react-router-dom';
const NoteState = (props) => {
    const[students,setStudents]=useState([]);
    
    useEffect(()=>{
      getAllStudent();
    },[])  
  
    async function getAllStudent(){
      try{
          const students=await axios.get("http://localhost:3004/students")
          // console.log(students.data);
        setStudents(students.data);
      }catch(error){
          console.log("something is Wrong")
      }
    }
  
  //Add Our Notes//
  const[student,setStudent]=useState({
    stuname:"",
    email:''
  });
  async function onFormSubmit(student){
    console.log(student,"On Form submit");
    try{
      await axios.post(`http://localhost:3004/students/`,student)
      getAllStudent();
    }catch(error){
      console.log('something is wrong');
    }
  }
  //Edit Note//
  
    return (
      <NoteContext.Provider value={{students,setStudents,onFormSubmit,student}}>
          {props.children}
      </NoteContext.Provider>
    )
      
}

export default NoteState
