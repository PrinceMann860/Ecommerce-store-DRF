import React from 'react';

const Return = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-amber-400 text-black py-4 px-6">
        <h1 className="text-2xl font-bold">Return Product</h1>
      </header>
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white max-w-[500px] mx-auto shadow-md rounded-lg overflow-hidden p-6">
          <h2 className="text-3xl font-semibold mb-4">Return Form</h2>
          <form action="">
            <div className="flex flex-col space-y-4">
              <input type="text" placeholder="Order ID" className="border-2 border-gray-300 p-2 rounded-md" />
              <input type="text" placeholder="Product Name" className="border-2 border-gray-300 p-2 rounded-md" />
              <select className="border-2 border-gray-300 p-2 rounded-md">
                <option value="">Reason for Return</option>
                <option value="damaged">Damaged Product</option>
                <option value="wrong">Wrong Product</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Additional Comments" className="border-2 border-gray-300 p-2 rounded-md" rows="4"></textarea>
              <button className="bg-black text-white p-2 rounded-md">Submit Return</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Return;