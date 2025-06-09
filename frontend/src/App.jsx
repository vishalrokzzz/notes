import React from 'react'
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div data-theme="lemonade">
        {/* <button className='btn btn-success' >click here</button> */}
        
        
    
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/note/:id" element={<NoteDetailPage/>}/>

        </Routes>
    </div>
  )
};

export default App