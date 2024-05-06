import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './resources/pages//Sections/Navbar';
import BottomNav from './resources/pages/Sections/BottomNav';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

export default App;