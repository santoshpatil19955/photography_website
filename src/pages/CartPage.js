import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Photo Print - Sunset", price: 25 },
    { id: 2, name: "Canvas Print - Mountains", price: 50 },
    { id: 3, name: "Digital Download - Cityscape", price: 15 }
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="content-body">
      <section className="cart-container">
        <div className="cart-content">
          <h2 className="cart-title">Your Cart</h2>

          <div className="cart-table-sec">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-total">
            <h3>Total: <span>${totalPrice.toFixed(2)}</span></h3>
          </div>

          <button className="checkout-btn">Checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
