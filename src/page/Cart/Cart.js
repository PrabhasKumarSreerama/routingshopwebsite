import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { cartReducer, initialState } from "./CartReducer";

const Cart = ({ cart, removeFromCart }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    items: cart.map((item) => ({ ...item, quantity: 1 })),
  });

  useEffect(() => {
    dispatch({ type: "calculate_total" });
  }, [state.items]);

  return (
    <div className="cart-page">
      <nav>
        <h1>Cart</h1>
        <Link to="/">
          <button>Back To Home</button>
        </Link>
      </nav>
      {state.items.length === 0 ? (
        <p className="emt">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {state.items.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "increase",
                          payload: { id: item.id },
                        })
                      }
                      className="increase-button"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "decrease",
                          payload: { id: item.id },
                        })
                      }
                      className="decrease-button"
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      dispatch({ type: "remove", payload: { id: item.id } });
                      removeFromCart(item);
                    }}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <p className="total-price">
                Total Price:{" "}
                <span className="price-strikethrough">
                  ${state.totalPrice.toFixed(2)}
                </span>
              </p>
              <p className="discount-info">You saved 10% on your order!</p>
              <p className="final-price">
                Final Price:{" "}
                <span className="final-price-amount">
                  ${state.finalPrice.toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
