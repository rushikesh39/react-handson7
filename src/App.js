import './App.css';
import React from 'react'
import Home from './Component/Home';
import Contact from './Component/Contact';
import Student from './Component/Student';
import Nav from './Component/Nav';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AddStudent from './Component/AddStudent';
import EditStudent from './Component/EditStudent';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contactUs' element={<Contact/>}/>
      <Route path='/addNewStudent' element={<AddStudent/>}/>
      <Route path='/editStudent' element={<EditStudent/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
