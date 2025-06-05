import React, { useState } from 'react';
import Logo from '../../assets/logo 12.png';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        title: '',
        price: '',
        discount: '',
        description: '',
        category: '',
        image: null, // Changed from File to null
        Waranty: '',
        Stock: '',
        brand: '',
        color: '',
        size: '',
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProduct({ ...product, image: e.target.files[0] });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate required fields
        if (!product.title || !product.price || !product.Stock || !product.image) {
            setStatusMessage('Please fill all required fields');
            setIsLoading(true);
            return;
        }

        const formData = new FormData();
        // Required fields
        formData.append('name', product.title);
        formData.append('price', product.price);
        formData.append('stock', product.Stock);  // Note: lowercase 'stock' to match error
        formData.append('image', product.image);

        // Optional fields
        if (product.discount) formData.append('discount', product.discount);
        if (product.description) formData.append('description', product.description);
        if (product.category) formData.append('category', product.category);
        if (product.Waranty) formData.append('waranty_period', product.Waranty);
        if (product.brand) formData.append('brand', product.brand);
        if (product.color) formData.append('color', product.color);
        if (product.size) formData.append('size', product.size);

        // Add rating with validation
        const rating = {
            rate: parseFloat((Math.random() * 5).toFixed(1)) || 0,
            count: parseInt(Math.floor(Math.random() * 500) + 1) || 0
        };
        formData.append('rating', JSON.stringify(rating));

        try {
            const response = await fetch('http://127.0.0.1:8000/api/product/', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.message || 'Submission failed');

            setStatusMessage('Product created successfully!');
            // Reset form...
        } catch (error) {
            setStatusMessage(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
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
                                <label htmlFor="image" className="block text-lg mb-2">Product Image</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="Stock" className="block text-lg mb-2">Stock</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type='number'
                                    name="Stock"
                                    placeholder="Enter stock"
                                    value={product.Stock}
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
                            <div className="mb-4">
                                <label htmlFor="Waranty" className="block text-lg mb-2">Product warranty (optional)</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="Waranty"
                                    placeholder="Enter warranty period"
                                    value={product.Waranty}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="size" className="block text-lg mb-2">Product size (optional)</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="size"
                                    placeholder="Enter size"
                                    value={product.size}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="color" className="block text-lg mb-2">Product color (optional)</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="color"
                                    placeholder="Enter color"
                                    value={product.color}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="brand" className="block text-lg mb-2">Product brand (optional)</label>
                                <input
                                    className="border border-black sm:w-80 h-10 px-3 rounded-md text-lg"
                                    type="text"
                                    name="brand"
                                    placeholder="Enter brand"
                                    value={product.brand}
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
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
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