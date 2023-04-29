import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import AddNote from './components/pages/AddNote'
import EditNote from './components/pages/EditNote'
import NoteState from './Context/notes/NoteState';

function App() {
  return (
   <div>
   <Navbar/>
   <NoteState>

   <Routes>

   <Route path="/" element={<Home />} />
   <Route path="about" element={<About />} />
   <Route path='addnote' element={<AddNote/>}/>
   <Route path='/editnote/:id' element={<EditNote/>}/>


   </Routes>
   </NoteState>

   </div>
  );
}

export default App;
