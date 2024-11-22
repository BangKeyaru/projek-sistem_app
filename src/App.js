// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login/login.js';
import MainPage from './home/home.js'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Selamat Datang</h1>
        </header>
        <Login></Login>
        <Routes>
          <Route path="/home.js" element={<Login />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>

        <footer className="App-footer">
          ©yeniMart 2024. Hak Cipta Dilindungi
        </footer>
      </div>
    </Router>
  );
}

export default App;
