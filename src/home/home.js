// home.js
import React, { useState } from 'react';
import './home.css';

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const slides = ['Promo 1', 'Promo 2', 'Promo 3']; // Sample promo slides
  const categories = [
    { name: 'Obat', icon: '💊' },
    { name: 'Alat Tulis', icon: '✏️' },
    { name: 'Sembako', icon: '🍞' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prevCategory) =>
      prevCategory === 0 ? categories.length - 1 : prevCategory - 1
    );
  };

  const nextCategory = () => {
    setCurrentCategory((prevCategory) =>
      (prevCategory + 1) % categories.length
    );
  };

  return (
    <div className="main-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#shop">Shop</a>
        </div>
        <div className="icons">
          <input type="text" placeholder="Search..." />
          <i className="cart-icon">🛒</i>
          <i className="user-icon">👤</i>
        </div>
      </div>

      {/* Slideshow */}
      <div className="slideshow">
        <div className="slide" style={{ backgroundColor: 'red' }}>
          {slides[currentSlide]}
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Category Section */}
      <div className="category">
        <h3>Kategori</h3>
        <div className="category-slider">
          <button onClick={prevCategory}>&lt;</button>
          <div className="category-item">
            <span className="icon">{categories[currentCategory].icon}</span>
            <span>{categories[currentCategory].name}</span>
          </div>
          <button onClick={nextCategory}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
