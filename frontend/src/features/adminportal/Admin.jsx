import React, { useState } from 'react';
import Logo from '../../assets/logo 12.png';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        discount: '',
        description: '',
        category: '',
        imageLink: '', // State to handle the image link
    });
    
    // State to track submission status (e.g., success or error messages)
    const [statusMessage, setStatusMessage] = useState('');

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Generate random unique ID as a string
        const id = Math.floor(Math.random() * 1000000).toString();

        // Generate random rating
        const rating = {
            rate: (Math.random() * 5).toFixed(1),
            count: Math.floor(Math.random() * 500) + 1,
        };

        // Create the product object
        const newProduct = {
            id,
            title: product.title,
            price: parseFloat(product.price),
            discount: parseInt(product.discount),
            description: product.description,
            category: product.category,
            image: product.imageLink,
            rating,
        };

        try {
            const response = await fetch('http://localhost:3000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct), // Send product data as JSON
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage('Product created successfully!');
                // Reset the form fields
                setProduct({
                    title: '',
                    price: '',
                    discount: '',
                    description: '',
                    category: '',
                    imageLink: '', // Reset the image link field
                });
            } else {
                setStatusMessage(`Error: ${JSON.stringify(result.errors || result)}`);
            }
        } catch (error) {
            setStatusMessage('Error creating product: ' + error.message);
        }
    };

    return (
        <div className="p-2 sm:p-10 animate-[changecolor_20s_ease_infinite] max-w-screen">
            <h1 className="text-center text-4xl font-bold">Admin Portal!</h1>
            <div className="lg:flex mt-10">
                <div className="w-[100%] lg:w-1/2">
                    <img src={Logo} alt="" className="w-[80%] lg:w-96 mx-auto" />
                </div>
                <div className="text-center lg:text-left w-[100%] lg:w-1/2">
                    <h2 className="text-2xl lg:text-4xl font-semibold">Make Money With Us</h2>
                    <p className="lg:w-[80%] my-10 lg:text-lg text-gray-700 bg-white/70">
                        Ready to transform your business into a thriving success? Selling your products on our website is the ultimate way to boost your business and reach new heights.
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl lg:text-4xl font-semibold">Add Products</h2>
                <h3 className="text-xl lg:text-2xl">You can add your Products on QuickBuy by filling the form below:</h3>
            </div>

            <div className="bg-white border-2 border-black m-2 p-6 w-full lg:w-5/3 rounded-lg">
                <h1 className="text-xl lg:text-2xl font-semibold">Enter Details</h1>

                <form onSubmit={handleSubmit}>
                    <div className="block lg:flex">
                        <div className="m-2 lg:w-1/2">
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-lg mb-2">Product Name</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="title"
                                    placeholder="Enter Name"
                                    value={product.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-lg mb-2">Product Description</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="description"
                                    placeholder="Enter Description"
                                    value={product.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="imageLink" className="block text-lg mb-2">Product Image Link</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="imageLink"
                                    placeholder="Enter Image Link"
                                    value={product.imageLink}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="m-2 w-1/2">
                            <div className="mb-4">
                                <label htmlFor="category" className="block text-lg mb-2">Product Category</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="category"
                                    placeholder="Enter Category"
                                    value={product.category}
                                    onChange={handleChange}
                                />
                            </div>                            
                        </div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl lg:text-2xl font-semibold">Set Price</h1>
                        <label htmlFor="price" className="block text-lg mb-2">Enter Price</label>
                        <input
                            className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg mb-4"
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            value={product.price}
                            onChange={handleChange}
                        />

                        <label htmlFor="discount" className="block text-lg mb-2">Enter Discount</label>
                        <input
                            className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                            type="number"
                            name="discount"
                            placeholder="Enter Discount %"
                            value={product.discount}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-amber-400 w-52 py-3 text-white rounded-2xl hover:bg-amber-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>

                {/* Display status message */}
                <div className="mt-4 text-center text-lg">
                    {statusMessage && <p>{statusMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Admin;