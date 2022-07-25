import React from 'react';
import HomePage from './HomePage';
import Login from './SignUp/SignUp';

import {Route, Routes} from 'react-router-dom'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={ <Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;
