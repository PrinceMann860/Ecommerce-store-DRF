import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen">
      
      <header className="bg-black text-gold py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-gold">Super Secure Payment System</h1>
          <p className="text-xl text-gray-300 mb-8">Your transactions are protected with cutting-edge security technology.</p>
        </div>
      </header>

      
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 text-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gold mb-4">Top-notch Encryption</h3>
            <p>We use advanced encryption protocols to safeguard your personal and financial information.</p>
          </div>
          <div className="bg-gray-700 text-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gold mb-4">24/7 Fraud Monitoring</h3>
            <p>Our system actively monitors transactions for fraudulent activities to keep you secure.</p>
          </div>
          <div className="bg-gray-700 text-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gold mb-4">Safe and Seamless</h3>
            <p>Enjoy a hassle-free and secure shopping experience every time you shop with us.</p>
          </div>
        </div>
      </section>

      
      <section className="bg-black py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gold mb-12">Customer Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 text-gray-200 p-6 rounded-lg">
              <p className="italic">"Shopping with QuickBuy feels safe and reliable every time!"</p>
              <p className="mt-4 font-bold text-gold">- Alex P.</p>
            </div>
            <div className="bg-gray-700 text-gray-200 p-6 rounded-lg">
              <p className="italic">"The security features make QuickBuy my go-to shopping platform."</p>
              <p className="mt-4 font-bold text-gold">- Jamie C.</p>
            </div>
            <div className="bg-gray-700 text-gray-200 p-6 rounded-lg">
              <p className="italic">"Knowing my payments are secure gives me peace of mind."</p>
              <p className="mt-4 font-bold text-gold">- Taylor R.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gold py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Secure Your Payments Today</h2>
          <p className="text-lg text-gray-800 mb-6">Shop with confidence and enjoy the ultimate security experience.</p>
          <Link to='/Product'>
            <button className="bg-black text-gold font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-yellow-500 transition-all">
              Start Shopping
            </button>
          </Link>
        </div>
      </section>

      
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} QuickBuy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
