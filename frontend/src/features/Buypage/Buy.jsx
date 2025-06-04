import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Buy = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product");
        const data = res.data;

        console.log("Axios Response:", data);

        const selectedProduct = data.find((product) => product.id === id);
        if (selectedProduct) {
          console.log("Selected Product:", selectedProduct);
          setProduct(selectedProduct);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-amber-400 text-black py-4 px-6">
        <h1 className="text-2xl font-bold">Buy Product</h1>
      </header>
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex justify-center md:justify-start">
            <img src={product.image} alt={product.title} className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto my-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-gray-900 mb-4">${product.price}</p>
            <form action="">
              <div className="flex flex-col justify-center align-middle max-w-[500px] mx-auto  lg:p-10">
                <h1 className="text-3xl font-bold text-black mb-4">Enter your details</h1>
                <input type="text" placeholder="Enter your name" className="border-2 border-black p-2 rounded-md my-2" />
                <input type="email" placeholder="Enter your email" className="border-2 border-black p-2 rounded-md my-2" />
                <input type="text" placeholder="Enter your phone number" className="border-2 border-black p-2 rounded-md my-2" />
                <input type="text" placeholder="Enter your state" className="border-2 border-black p-2 rounded-md my-2" />
                <input type="text" placeholder="Enter your PINCODE" className="border-2 border-black p-2 rounded-md my-2" />
                <input type="text" placeholder="Enter your city" className="border-2 border-black p-2 rounded-md my-2" />
                <input type="text" placeholder="Enter your landmark" className="border-2 border-black p-2 rounded-md my-2" />
                <input type="text" placeholder="Enter your address" className="border-2 border-black p-2 rounded-md my-2" />
                <button className="bg-black text-white p-2 rounded-md my-2">Proceed to Payment</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Buy;