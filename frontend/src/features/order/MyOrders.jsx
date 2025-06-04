import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const order = {
    id: 1,
    date: '2023-11-22',
    total: 199.99,
    status: 'Shipped',
    action: 'Track',
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // Added image URL
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-amber-400 text-black py-4 px-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
      </header>
      <main className='bg-gray-100 min-h-[100%] p-4 lg:p-10'>
        <div className='bg-white flex p-4 lg:p-10 rounded-md shadow-md'>
          <div className='w-1/4 p-1 sm:w-20'><img src={order.imageUrl} alt="" /></div>
          <div className='border-l-2 border-gray-200 pl-4'>
            <h2 className='text-2xl font-semibold'>Order #{order.id}</h2>
            <p className='text-lg'>Order Date: {order.date}</p>
            <p className='text-lg'>Total: ${order.total}</p>
            <p className='text-lg'>Status: {order.status}</p>
            <Link to='/track-order' className='text-amber-400 text-lg font-semibold'>{order.action}</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyOrders;
