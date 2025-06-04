import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4">
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">Super Fast and Free Delivery</h1>
    <p className="text-lg mb-8">Enjoy free and fast delivery on all your favorite products!</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
      <ul className="list-none p-0 text-center">
        <li className="mb-4">Lightning-fast delivery</li>
        <li className="mb-4">Free shipping on all orders</li>
        <li className="mb-4">Easy returns and exchanges</li>
        <li className="mb-4">Secure checkout process</li>
      </ul>
    </div>
    <div className="text-center">
  <Link to="/Product">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full mx-20">Shop Now</button>
  </Link>
  <Link to="/About">
    <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full mt-4 mx-20">About Us</button>
  </Link>
</div>
  </div>
</div>

      <footer className="bg-gray-800 text-gray-400 py-4 text-center">
        <p>&copy; QuickBuy</p>
      </footer>
    </div>
  );
};

export default LandingPage;