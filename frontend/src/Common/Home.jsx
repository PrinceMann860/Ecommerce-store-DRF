import React, { useState, useEffect } from 'react';
import Image2 from '../assets/Image2.png';
import { Link } from 'react-router-dom';
import { PiTruck } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import Category from '../features/Category/Category';

export default function Home() {
  const slides = [ 
      banner1,
      banner2,
      banner3,
      banner4
  ];

  const [currentindex, setcurrentindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextslide();
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentindex]);

  const prevslide = () => {
    const isfirstslide = currentindex === 0;
    const newIndex = isfirstslide ? slides.length - 1 : currentindex - 1;
    setcurrentindex(newIndex);
  };

  const nextslide = () => {
    const islastslide = currentindex === slides.length - 1;
    const newindex = islastslide ? 0 : currentindex + 1;
    setcurrentindex(newindex);
  };

  return (
    <div className='max-w-screen h-auto animate-[changecolor_20s_ease_infinite] z-0'>
      <div className='flex'>
        <div className='m-5 lg:p-[10%] w-1/2 p-[5%]'>
          <h1 className='text-[4vw] lg:text-5xl font-bold text-amber-600 animated-text'></h1>
          <h1 className='text-black text-[3vw] lg:text-5xl font-bold lg:pt-10'>
            QuickBuy: Where Speed Meets Savings!
          </h1>
          <p className='text-[3vw] lg:text-4xl text-gray-900 lg:pt-10 font-semibold font-cursive'>
            Discover top class clothing, accessories, jewelery and electronics items from QuickBuy. Enjoy great deals and excellent service, all in one place. Simplify your shopping experience with us.
          </p>
          <Link to={'/Product'}>
          <button className='bg-amber-600 w-auto p-2 mt-8 h-auto text-white text-[2vw] rounded-md hover:text-red-950'>
            Shop Now
          </button>
          </Link>
        </div>
        <div className='w-1/2 h-auto lg:float-right pt-[12%]'>
          <img className='w-[100%] max-w-[500px] h-auto mx-auto' src={Image2} alt="Product" />
        </div>
      </div>
      <div className='w-screen h-[200px] lg:h-[500px] group'>
        <Link to={'/category'}><div><img src={slides[currentindex]} alt="" className='w-full z-10 h-[200px] lg:h-[500px]' /> </div></Link>
        <IoIosArrowDropleftCircle className='hidden lg:group-hover:inline text-5xl text-white z-20  relative top-[-50%] left-10' onClick={prevslide}/>
        <IoIosArrowDroprightCircle className='hidden lg:group-hover:inline text-5xl text-white z-20 float-right  mt-[-20px] relative top-[-50%] right-10' onClick={nextslide}/> 
      </div>
      <div className='block'>
        <h1 className='text-[5vw] text-black flex justify-center font-bold'>
          Why Shop With Us
        </h1>
        <div className='flex flex-col lg:flex-row gap-5 mt-8 justify-center items-center pb-20'>
          <Link to="/page1">
            <button className='bg-sky-950 w-80 lg:w-[30vw] h-80 sm:h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'>
              <PiTruck className='text-white text-[5vh]' />
              <h1 className='mt-4 text-center text-white font-bold'>
                Super Fast and Free Delivery
              </h1>
              <p className='mt-1 text-center text-white'>
                Enjoy free and fast delivery on all your favorite products!
              </p>
            </button>
          </Link>
          <Link to='/page2'>
            <button className='bg-sky-950 w-80 lg:w-[30vw] h-80 sm:h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'>
              <MdAttachMoney className='text-white text-[5vh]' />
              <h1 className='mt-4 text-center font-bold text-white'>
                Money-back Guaranteed
              </h1>
              <p className='mt-1 text-center text-white'>
                30-day money-back guarantee.
              </p>
            </button>
          </Link>
          <Link to='/page3'>
            <button className='bg-sky-950 w-80 lg:w-[30vw] h-80 sm:h-40 rounded-md p-2 flex flex-col text-white justify-center items-center transition duration-300 hover:bg-sky-700 focus:ring-2 focus:ring-blue-500'>
              <RiSecurePaymentLine className='text-white text-[5vh]' />
              <h1 className='mt-4 text-center font-bold text-white'>
                Super Secure Payment System
              </h1>
              <p className='mt-1 ml-1 text-center text-white'>
                Enjoy secure payments every time you shop with us.
              </p>
            </button>
          </Link>
        </div>
      </div>
      <Category />
    </div>
  );
}
