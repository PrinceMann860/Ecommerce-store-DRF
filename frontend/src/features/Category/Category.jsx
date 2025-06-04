import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:3000/product").then((res) => {
        setproduct(res.data);
      }).catch((err) => {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const menProduct = product.filter(product => product.category === "men's clothing");
  const electronicProduct = product.filter(product => product.category === 'electronics');
  const womenProduct = product.filter(product => product.category === "women's clothing");
  const jeweleryProduct = product.filter(product => product.category === 'jewelery');

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-left text-3xl font-semibold">Men's Products</h2>
        <div className="mt-6 flex overflow-x-auto space-x-6">
          {menProduct.map((value, index) => (
            <div key={index} className='lg:w-72 md:w-52 w-40 lg:h-auto flex-shrink-0'>
              <Link to={`/infopage/${value.id}`}>
              <img src={value.image} alt="product-img" className='w-[100%] h-[40%] lg:h-[60%]' />
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
            <img src={value.image} alt="product-img" className='w-[100%] h-[40%] lg:h-[60%]' />
              <div className='px-2'>
                <h2 className='font font-semibold text-xl'>{value.title}</h2>
  
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
            <img src={value.image} alt="product-img" className='w-[100%] h-[40%] lg:h-[60%]' />
              <div className='px-2'>
                <h2 className='font font-semibold text-xl'>{value.title}</h2>
  
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
            <img src={value.image} alt="product-img" className='w-[100%] h-[40%] lg:h-[60%]' />
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

export default Category;
