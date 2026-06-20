import React from 'react';
import './Header.css';

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>ShopZone</h1>
        </div>
        
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#deals" className="nav-link">Deals</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Search products..." />
          </div>
          
          <button className="cart-btn" onClick={onCartClick}>
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;