import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Search from "./pages/Search"

import './App.css';
import Remember from './pages/Remember';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Search />}></Route>
       <Route path='/remember' element={<Remember />}></Route>
     </Routes>
    </div>
  );
}

export default App;
