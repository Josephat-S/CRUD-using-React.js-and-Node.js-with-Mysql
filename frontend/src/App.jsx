import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Create from './Create.jsx';
import Read from './Read.jsx';
import Update from './Update.jsx';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/read/:id' element={<Read />}></Route>
      <Route path='/edit/:id' element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App