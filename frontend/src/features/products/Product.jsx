import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from "../../assets/banner1.jpg";
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Product = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://127.0.0.1:8000/api/product").then((res) => {
        setproduct(res.data);
      }).catch((err) => {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const menProduct = product.filter(product => product.category === "men's clothing");
  const electronicProduct = product.filter(product => product.category === 'Electronics');
  const womenProduct = product.filter(product => product.category === "women's clothing");
  const jeweleryProduct = product.filter(product => product.category === 'jewelery');

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
    <div className="bg-white">
      <div className='w-screen h-[200px] lg:h-[500px] group'>
        <Link to={'/category'}><div><img src={slides[currentindex]} alt="" className='w-full z-10 h-[200px] lg:h-[500px]' /> </div></Link>
        <IoIosArrowDropleftCircle className='hidden lg:group-hover:inline text-5xl text-white z-20  relative top-[-50%] left-10' onClick={prevslide} />
        <IoIosArrowDroprightCircle className='hidden lg:group-hover:inline text-5xl text-white z-20 float-right  mt-[-20px] relative top-[-50%] right-10' onClick={nextslide} />
      </div>
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-left text-4xl my-10 font-bold">Products</h1>
        <h2 className="text-left text-3xl font-semibold">Men's Products</h2>
        <div className="mt-6 flex overflow-x-auto space-x-6">
          {menProduct.map((value, index) => (
            <div key={index} className='lg:w-72 md:w-52 w-40 lg:h-auto flex-shrink-0'>
              <Link to={`/infopage/${value.id}`}>
                <img src={`http://127.0.0.1:8000${value.image}`} alt={value.name} className='w-[100%] h-[40%] lg:h-[60%] object-contain' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.title}</h2>

                  <div className='text-lg font-semibold'>${value.price} <p className='inline text-orange-400 font-medium'>({value.discount}% OFF)</p></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-left text-3xl font-semibold">Electronic Products</h2>
        <div className="mt-6 flex overflow-x-auto space-x-6">
          {electronicProduct.map((value, index) => (
            <div key={index} className='lg:w-72 md:w-52 w-40 lg:h-auto flex-shrink-0'>
              <Link to={`/infopage/${value.id}`}>
                <img
                  src={`http://127.0.0.1:8000${value.image}`}
                  alt={value.name}
                  className='w-[100%] h-[40%] lg:h-[60%] object-contain'
                />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.name}</h2>
                  <div className='text-lg font-semibold'>${value.price} <p className='inline text-orange-400 font-medium'>({value.discount}% OFF)</p></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-left text-3xl font-semibold">Women's Products</h2>
        <div className="mt-6 flex overflow-x-auto space-x-6">
          {womenProduct.map((value, index) => (
            <div key={index} className='lg:w-72 md:w-52 w-40 lg:h-auto flex-shrink-0'>
              <Link to={`/infopage/${value.id}`}>
                <img src={`http://127.0.0.1:8000${value.image}`} alt={value.name} className='w-[100%] h-[40%] lg:h-[60%] object-contain' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.name}</h2>

                  <div className='text-lg font-semibold'>${value.price} <p className='inline text-orange-400 font-medium'>({value.discount}% OFF)</p></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-left text-3xl font-semibold">Jewelery Products</h2>
        <div className="mt-6 flex overflow-x-auto space-x-6">
          {jeweleryProduct.map((value, index) => (
            <div key={index} className='lg:w-72 md:w-52 w-40 lg:h-auto flex-shrink-0'>
              <Link to={`/infopage/${value.id}`}>
                <img src={`http://127.0.0.1:8000${value.image}`} alt={value.name} className='w-[100%] h-[40%] lg:h-[60%] object-contain' />
                <div className='px-2'>
                  <h2 className='font font-semibold text-xl'>{value.title}</h2>

                  <div className='text-lg font-semibold'>${value.price} <p className='inline text-orange-400 font-medium'>({value.discount}% OFF)</p></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
