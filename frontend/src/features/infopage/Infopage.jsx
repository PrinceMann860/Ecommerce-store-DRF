import React, { useEffect, useState } from 'react';
import { PiTruck } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Infopage = () => {
  const { id } = useParams();
  const [productinfo, setproductinfo] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInput, setUserInput] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [usersData, setUsersData] = useState({});
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/product");
        const data = res.data;
        const selectedProduct = data.find(product => product.id === parseInt(id));

        if (selectedProduct) {
          setproductinfo(selectedProduct);
          setTotalPrice(selectedProduct.price);
        }
      } catch (err) {
        console.log("Error fetching product:", err);
      }
    };

    const fetchAllData = async () => {
      try {
        // Fetch all users
        const usersRes = await axios.get("http://127.0.0.1:8000/api/user/");
        const allUsers = usersRes.data;
        
        // Fetch all reviews and filter by product ID
        const reviewsRes = await axios.get("http://127.0.0.1:8000/api/review/");
        const productReviews = reviewsRes.data.filter(review => review.product === parseInt(id));
        setReviews(productReviews);

        // Create user data map
        const usersDataMap = {};
        allUsers.forEach(user => {
          usersDataMap[user.id] = user;
        });

        setUsersData(usersDataMap);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchProduct();
    fetchAllData();
  }, [id]);

  // Handle Add to Cart
  const handlecartclick = () => {
    if (productinfo) {
      dispatch({ type: 'increment' });
      dispatch({
        type: 'add_to_cart',
        payload: { ...productinfo, quantity: userInput },
      });
    } else {
      console.error("Product information is not available.");
    }
  };

  // Handle review submission
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/review/', {
        ...newReview,
        product: id,
      });
      // Refresh reviews and filter by product ID
      const res = await axios.get("http://127.0.0.1:8000/api/review/");
      const productReviews = res.data.filter(review => review.product === parseInt(id));
      setReviews(productReviews);
      setNewReview({ rating: 5, comment: '' });
    } catch (err) {
      console.log("Error submitting review:", err);
    }
  };

  const handleReviewChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating,
    });
  };

  // Calculate delivery date (1 week from today)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const deliveryDateString = deliveryDate.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Handle quantity change
  const handleChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity >= 1 && quantity <= 5) {
      setUserInput(quantity);
      if (productinfo) {
        setTotalPrice(quantity * productinfo.price);
      }
    } else {
      console.error("Quantity must be between 1 and 5.");
    }
  };

  if (!productinfo) {
    return <div>Loading or Product not found...</div>;
  }

  const mrp = parseInt(productinfo.price / (1 - productinfo.discount / 100));

  return (
    <div className='m-0 p-0 max-w-screen'>
      <div className='block lg:flex min-w-screen'>
        {/* Product Image */}
        <div className='w-full lg:w-1/2'>
          <img 
            src={`http://127.0.0.1:8000${productinfo.image}`} 
            alt={productinfo.name} 
            className='m-24 w-[60%] h-auto' 
          />
        </div>

        {/* Product Details */}
        <div className='text-left w-full lg:w-1/2 lg:m-10 p-10'>
          <h1 className='text-2xl font-bold mb-4'>{productinfo.name}</h1>
          <p className='mb-2'>{productinfo.description}</p>
          
          {/* Ratings */}
          <p className='mb-2 flex items-center'>
            Ratings&nbsp;
            {[...Array(5)].map((_, i) => {
              if (productinfo.rating >= i + 1) {
                return <BsStarFill key={i} className="text-yellow-400" />;
              } else if (productinfo.rating > i && productinfo.rating < i + 1) {
                return <BsStarHalf key={i} className="text-yellow-400" />;
              } else {
                return <BsStar key={i} className="text-gray-300" />;
              }
            })}
            <span className="ml-2 text-gray-600">({productinfo.rating})</span>
          </p>

          <p className='mb-2'>{productinfo.category}</p>
          
          {/* Price */}
          <span className='text-2xl'>
            <p className='inline text-red-600'>-{productinfo.discount}%</p>
            <p className='inline text-black'>₹{totalPrice}</p>
          </span>
          <p className='mb-4'>MRP ₹{mrp}<br /> Inclusive of all taxes</p>

          {/* Features */}
          <div className='flex justify-around mb-4'>
            <Link to={'/page1'}>
              <div className='text-center'><PiTruck size={40} className='mx-auto' />Cash On Delivery</div>
            </Link>
            <Link to={'/page2'}>
              <div className='text-center'><MdAttachMoney size={40} className='mx-auto' />30 day return & replacement</div>
            </Link>
            <Link to={'/page3'}>
              <div className='text-center'><RiSecurePaymentLine size={40} className='mx-auto' />Secure Payments</div>
            </Link>
          </div>

          {/* Product Specifications */}
          <p className='mb-2'><span className='font-bold'>Product warranty: </span>
            {productinfo.waranty_period || 'None'}
          </p>
          <p className='mb-2'>
            <span className='font-bold'>Shipping Information: </span>
            Will be delivered by <span className="font-semibold">{deliveryDateString}</span>
          </p>
          <p className='mb-2'><span className='font-bold'>Color: </span>
            {productinfo.color || 'Not Specified'}
          </p>
          <p className='mb-2'><span className='font-bold'>Size: </span>
            {productinfo.size || 'Regular'}
          </p>
          <p className='mb-2'><span className='font-bold'>Brand: </span>
            {productinfo.brand}
          </p>
          <p className='mb-2'>
            <span className='font-bold'>Availability status: </span>
            {productinfo.stock >= 10 ? (
              <span className='text-green-500'>In Stock</span>
            ) : productinfo.stock > 0 ? (
              <span className='text-yellow-500'>Limited stock</span>
            ) : (
              <span className='text-red-500'>Out of stock</span>
            )}
          </p>

          {/* Quantity Selector */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-lg font-medium">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={5}
              value={userInput}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Action Buttons */}
          <div className='flex justify-around w-[300px]'>
            <Link to={`/Buy/${productinfo.id}`}>
              <button className="bg-amber-400 text-black px-6 py-3 rounded-lg hover:bg-amber-500 transition duration-300">
                Buy Now
              </button>
            </Link>
            <Link to={`/cart/${productinfo.id}`}>
              <button
                className="bg-amber-400 text-black px-6 py-3 rounded-lg hover:bg-amber-500 transition duration-300"
                onClick={handlecartclick}
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Customer Reviews</h2>
          
          {/* Add Review Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none mr-1"
                    >
                      {star <= newReview.rating ? (
                        <BsStarFill className="text-yellow-400 text-2xl" />
                      ) : (
                        <BsStar className="text-gray-300 text-2xl" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block text-gray-700 mb-2">Your Review</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newReview.comment}
                  onChange={handleReviewChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  required
                  placeholder="Share your experience with this product..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-amber-400 text-black px-6 py-2 rounded-lg hover:bg-amber-500 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
          
          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.length > 0 ? (
              reviews.map((review) => {
                const user = usersData[review.user];
                return (
                  <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {user ? (user.username || user.email || `User #${review.user}`) : `User #${review.user}`}
                        </h3>
                        {user?.email && (
                          <p className="text-gray-500 text-sm">{user.email}</p>
                        )}
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) =>
                            i < review.rating ? (
                              <BsStarFill key={i} className="text-yellow-400 inline" />
                            ) : (
                              <BsStar key={i} className="text-gray-300 inline" />
                            )
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{review.comment}</p>
                        <p className="text-gray-500 text-sm">
                          Reviewed on {new Date(review.created_at).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infopage;