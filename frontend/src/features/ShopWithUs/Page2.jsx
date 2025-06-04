import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">30-Days Money-Back Guarantee</h1>
          <p className="text-lg mb-6">We stand by our products. Love it, or get your money back.</p>
        </div>
      </header>

      {/* Guarantee Details Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-100 text-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Hassle-Free Returns</h3>
            <p>If you're not satisfied, return your product within 30 days for a full refund. No questions asked.</p>
          </div>
          <div className="bg-yellow-100 text-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Customer-Centric Policy</h3>
            <p>Your satisfaction is our priority. We ensure a seamless refund process every time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-yellow-200 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-100 text-gray-900 p-6 rounded-lg">
              <p className="italic">"The money-back guarantee gives me confidence to shop without worries!"
              </p>
              <p className="mt-4 font-bold">- Sarah L.</p>
            </div>
            <div className="bg-yellow-100 text-gray-900 p-6 rounded-lg">
              <p className="italic">"A truly hassle-free return policy. QuickBuy stands by their word!"
              </p>
              <p className="mt-4 font-bold">- John D.</p>
            </div>
            <div className="bg-yellow-100 text-gray-900 p-6 rounded-lg">
              <p className="italic">"I’ve never felt more assured buying online. The process was smooth and quick!"
              </p>
              <p className="mt-4 font-bold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Risk-Free Shopping</h2>
          <p className="text-lg mb-6">Shop today with confidence. Your satisfaction is guaranteed!</p>
          <Link to='/Product'>
            <button className="bg-gray-900 text-yellow-400 font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all">
              Start Shopping
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-yellow-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} QuickBuy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
