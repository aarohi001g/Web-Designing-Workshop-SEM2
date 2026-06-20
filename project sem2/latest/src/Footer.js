import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopZone</h3>
          <p>Your favorite online shopping destination</p>
          <p>📍 Ghaziabad, Uttar Pradesh, India</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#deals">Deals</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <a href="#help">Help Center</a>
          <a href="#returns">Returns</a>
          <a href="#shipping">Shipping</a>
          <a href="#terms">Terms</a>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📧 support@shopzone.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 ShopZone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;