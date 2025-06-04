import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {

  const [contactus, setcontactus] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactus({
      ...contactus, // Spread the current state
      [name]: value // Update the specific field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios.post("http://127.0.0.1:8000/api/contactus/",contactus)
    .then(res => {
      console.log(res);
      alert('Message sent successfully');
      // Clear the form fields after successful submission
      setcontactus({
        name: '',
        email: '',
        message: ''
      });
    }).catch((err)=>{
      console.log(err);
      
    })
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-10" style={{backgroundImage: "url('https://img.freepik.com/premium-vector/shopping-pattern-background-design_260839-17.jpg')"}}>
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl w-full">
          <h1 className='text-[4vh] lg:text-5xl text-amber-400 text-center mb-4'>
            <span className="text-white">Quick</span>Buy
          </h1>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input 
                id="name" 
                type="text" 
                name="name" 
                value={contactus.name} 
                onChange={handleChange} 
                className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Your Name" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                name="email" 
                value={contactus.email} 
                onChange={handleChange} 
                className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Your Email" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={contactus.message} 
                onChange={handleChange} 
                className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Your Message" 
                rows="5" 
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                type="submit" 
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
