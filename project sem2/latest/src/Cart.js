import React from 'react';
import './Cart.css';

function Cart({ cartItems, cartTotal, removeFromCart, updateQuantity, onClose }) {
  const tax = cartTotal * 0.18;
  const finalTotal = cartTotal + tax;

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={onClose}>Add Products</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <div className="cart-item-price">₹{item.price}</div>
                    <div className="cart-item-quantity">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Items Total</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="summary-row">
                <span>Tax (18%)</span>
                <span>₹{tax}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
              <button className="checkout-btn">PLACE ORDER</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;