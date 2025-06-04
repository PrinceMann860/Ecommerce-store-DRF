import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart); // Get cart items from Redux store

  const handleDeleteCart = (id) => {
    dispatch({ type: 'remove_to_cart', payload: { id } });
  };

  const handleIncrement = (id) => {
    dispatch({ type: 'increment_quantity', payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: 'decrement_quantity', payload: { id } });
  };

  // If the cart is empty, show a message
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl font-semibold">Your cart is empty!</p>
        <p className="text-gray-500 mt-2">Add some products to your cart to see them here.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => window.history.back()} // Navigate back to the previous page
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row bg-neutral-400 py-14">
      {/* Cart Items Section */}
      <div className="bg-white w-full lg:w-2/3 h-auto ml-0 lg:ml-28 rounded-sm shadow-slate-900 shadow-sm p-4">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-row h-auto w-full mb-6">
            <div className="mr-5">
              <img
                src={item.image}
                alt={item.title}
                className="lg:w-32 w-20 mx-auto h-20 lg:h-32 object-contain"
              />
              <div className="border-2 border-gray-400 mt-6 flex rounded-2xl justify-center">
                <button
                  className="w-8 h-8 pb-1 text-xl"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={item.quantity}
                  readOnly
                  className="w-10 pl-2 lg:mx-4 text-center"
                />
                <button
                  className="w-8 h-8 pb-1 text-xl"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
              </div>
            </div>
            <div>
              <h4 className="flex mt-5">
                {item.title}
                <hr className="w-[1px] mt-1 h-5 ml-10 bg-black" />
                <span className="ml-5">Delivery by Dec 26</span>
              </h4>
              <p className="text-sm mt-3 text-gray-600">Category: {item.category}</p>
              <h6 className="mt-3 font-bold">Price: ${item.price}</h6>
              <h6 className="mt-3">Rating: ⭐⭐⭐⭐⭐</h6>
              <button
                onClick={() => handleDeleteCart(item.id)}
                className="font-bold mt-4 lg:mt-8 px-2 py-2 rounded-md bg-black text-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Price Details Section */}
      <div className="bg-white w-full lg:w-1/3 h-auto ml-0 lg:ml-10 rounded-sm shadow-slate-900 shadow-sm p-4 mt-10 lg:mt-0">
        <h1 className="flex justify-center items-center font-semibold text-2xl">Price Details</h1>
        <hr className="w-auto h-1 bg-black mt-6" />
        <div className="mt-5 px-6">
          <div className="flex justify-between mb-5">
            <h6>Total Items</h6>
            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between mb-5">
            <h6>Total Price</h6>
            <span>
              $
              {cartItems.reduce(
                (total, item) => total + item.quantity * item.price,
                0
              )}
            </span>
          </div>
          <hr className="w-auto h-1 bg-black mt-6" />
          <div className="flex justify-center mt-5">
            <button className="bg-amber-400 text-black px-6 py-2 rounded-md font-bold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}