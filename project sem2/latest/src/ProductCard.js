import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const savings = product.originalPrice - product.price;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="discount-tag">{product.discount}% OFF</span>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <span className="rating-badge">⭐ {product.rating}</span>
        </div>

        <div className="product-price">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="savings">Save ₹{savings}</span>
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductCard;