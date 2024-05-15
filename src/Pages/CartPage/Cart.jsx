
import React from "react";
import { useShop } from "../../Components/Context/Shop-Context";
import Navbar from "../../Components/Navbar/Navbar";

const Cart = () => {
  const { cartItems,  removeFromCart } = useShop();
  return (
    <>
      <Navbar />
      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <div className="cart">
                  <div className="cart-items">
                    <div className="img">
                      <img src={item.catImg} alt="" width={200} />
                    </div>
                    <div className="product-name">
                      <h5>{item.productName}</h5>
                    </div>
                    <div className="price">
                      <h2>Price : Rs:{item.price}/-</h2>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
