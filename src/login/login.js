// src/login/login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Here you might want to validate the credentials
    console.log('Email:', email);
    console.log('Password:', password);

    // Navigate to the main page after login
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="store-info">
        <img src="logo-toko.png" alt="Logo Toko Kelontong" className="store-logo" />
        <h2>Toko Kelontong Mbak Yeni</h2>
        <p>Toko Kelontong Lokal Pilihan Terbaik</p>
      </div>
      <div className="login-form">
        <h3>Log in</h3>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Masuk</button>
        </form>
        <div className="login-links">
          <a href="#">Belum Punya akun? Daftar</a>
          <a href="#">Lupa Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
