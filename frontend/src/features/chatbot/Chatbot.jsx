import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi, I'm QuickBuy's AI Chatbot. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const getBotResponse = (userInput) => {
    const responses = {
      "hello": "Hello! How can I assist you today?",
      "hey": "Hey! How can I assist you today?",
      "hi": "Hi! How can I assist you today?",
      "what is your name": "I'm QuickBuy's AI Chatbot.",
      "how can i track my orders": "You can track your order by visiting the 'Orders' section in your account.",
      "what is your return policy": "Our return policy allows returns within 30 days of purchase. Please visit our return policy page for more details.",
      "what is your replacement policy": "We offer replacements for defective products within 15 days of purchase. Please visit our replacement policy page for more details.",
      "how can i list my products on your site": "You can list your products on our website through the admin portal which you can access from the below footer section (black part at the bottom of the page).",
      "how can i contact to your customer support": "You can contact our support team via the 'Contact Us' page or call our customer service number '+1 xxx-xxx-xxx-x'.",
      "what type of products do you sell": "We sell a wide range of products including electronics, clothing, accessories, and more.",
      "how can i reset my password": "You can reset your password by visiting the 'Forgot Password' page on our website.",
      "how can i register on your site": "You can register on our website by using the login button on the navbar from login page you can see the sign up option through which you can register on our site.",
      "how can i login to my account": "You can login to your account by using the login button on the navbar.",
    };

    return responses[userInput.toLowerCase()] || "I'm sorry, I am unable to help you at this moment, Our Customer support will reach you soon";
  };

  return (
    <div className='flex justify-center items-center min-h-screen animate-[changecolor_20s_ease_infinite] z-0'>
      <div className='bg-gray-800 h-[90vh] w-full max-w-md rounded-md p-5 flex flex-col'>
        <h1 className='text-white text-3xl text-center font-bold'>Quick <span className='text-amber-400'>buy</span></h1>
        <div className='flex-1 p-5 bg-gray-700 rounded-md overflow-y-scroll mt-5'>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <p className={`text-white p-2 my-2 inline-block rounded-xl max-w-xs ${message.sender === 'user' ? 'bg-gray-800 text-end' : 'bg-gray-800 text-start'}`}>
                {message.text}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className='flex mt-5'>
          <input
            type="text"
            placeholder='Type your message here'
            className='flex-1 p-2 rounded-md'
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className='bg-amber-400 p-2 rounded-md ml-2' onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;