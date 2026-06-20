import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      image: "https://via.placeholder.com/200x200/2874f0/ffffff?text=Headphones",
      rating: 4.5,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch Fitness Tracker",
      price: 1599,
      originalPrice: 3999,
      discount: 60,
      image: "https://via.placeholder.com/200x200/ff9f00/ffffff?text=Smart+Watch",
      rating: 4.3,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Men's Running Shoes",
      price: 899,
      originalPrice: 1999,
      discount: 55,
      image: "https://via.placeholder.com/200x200/0575e6/ffffff?text=Shoes",
      rating: 4.2,
      category: "Fashion"
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 649,
      originalPrice: 1299,
      discount: 50,
      image: "https://via.placeholder.com/200x200/00b8a9/ffffff?text=Backpack",
      rating: 4.4,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Wireless Mouse",
      price: 399,
      originalPrice: 799,
      discount: 50,
      image: "https://via.placeholder.com/200x200/f8f8ff/2874f0?text=Mouse",
      rating: 4.1,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Phone Case Premium",
      price: 299,
      originalPrice: 599,
      discount: 50,
      image: "https://via.placeholder.com/200x200/ff6b6b/ffffff?text=Phone+Case",
      rating: 4.0,
      category: "Accessories"
    },
    {
      id: 7,
      name: "Gaming Keyboard",
      price: 1199,
      originalPrice: 2499,
      discount: 52,
      image: "https://via.placeholder.com/200x200/4ecdc4/ffffff?text=Keyboard",
      rating: 4.6,
      category: "Electronics"
    },
    {
      id: 8,
      name: "Cotton T-Shirt",
      price: 349,
      originalPrice: 699,
      discount: 50,
      image: "https://via.placeholder.com/200x200/ffe66d/000000?text=T-Shirt",
      rating: 4.2,
      category: "Fashion"
    }
  ];

  return (
    <div className="product-list">
      <div className="section-header">
        <h2>Best Sellers</h2>
        <p>Top picks for you</p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;