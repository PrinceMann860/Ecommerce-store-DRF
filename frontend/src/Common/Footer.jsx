import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo 12.png';

export default function Footer() {
  return (
    <div className='bg-black h-auto p-5'>
      <div className='text-center mb-5'>
        <img src={Logo} alt="Logo" className='mx-auto w-[200px]' />
        <h1 className='text-[5vh] lg:text-6xl text-amber-600 mb-5'>
          <span className="text-amber-400">Quick</span>Buy
        </h1>
      </div>
      <div className='flex text-center flex-col lg:flex-row justify-around items-center lg:items-start lg:text-left'>
        <div className='mb-10'>
          <h1 className='text-[3vh] lg:text-4xl text-white'>Connect with us</h1>
          <ul className='flex flex-col mt-5 items-center lg:items-center'>
            <li className='text-[2vh] lg:text-3xl text-zinc-400'>Facebook</li>
            <li className='text-[2vh] lg:text-3xl text-zinc-400'>Twitter</li>
            <li className='text-[2vh] lg:text-3xl text-zinc-400'>Instagram</li>
            <li className='flex gap-2 mt-2'>
              <FaFacebook className='text-[3vh] lg:text-3xl text-amber-400' />
              <FaTwitter className='text-[3vh] lg:text-3xl text-amber-400' />
              <FaInstagram className='text-[3vh] lg:text-3xl text-amber-400' />
            </li>
          </ul>
        </div>
        <a href="/admin">
          <div className='mb-10'>
            <h4 className='text-[3vh] lg:text-4xl text-white'>Make Money with Us</h4>
            <ul className='flex flex-col mt-5 items-center lg:items-center'>
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>Sell on QuickBuy</li>
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>Supply to QuickBuy</li>
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>Become an Affiliate</li>
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>Advertise Your Products</li>
            </ul>
          </div>
        </a>
        <div className='mb-10'>
          <h4 className='text-[3vh] lg:text-4xl text-white text-center'>Let Us Help You</h4>
          <ul className='flex flex-col mt-5 items-center lg:items-center'>
            <Link to="/Profile">
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>Your Account</li>
            </Link>
            <Link to="/Return">
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>Returns Center</li>
            </Link>
            <Link to="/Page3">
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>100% Purchase Protection</li>
            </Link>
            <Link to="/chatbot">
              <li className='text-[2vh] lg:text-3xl text-zinc-400'>Help Center</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
