



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import Loader from '../Component/Loader';
import { addToCart } from '../Redux/cartSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const imageUrl = 'https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/bg-page2.jpg';

  const ExercItems = [

    {
        "name": "Hand Dumble",
        "price": "500",
        "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/1.jpg",
        "rating": 3.2
    
    },

{
    "name": "Fitness Slam Ball",
    "price": "450",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/2.jpg",
    "rating": 5

},
{
    "name": "Pushup Stands",
    "price": "250",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/7.jpg",
    "rating": 3.5

},
{
    "name": "Ab Roller",
    "price": "550",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/9.jpg",
    "rating": 3

},
{
    "name": "Mind Reader Kettlebell",
    "price": "360",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/5.jpg",
    "rating": 2

},
{
    "name": "Cycling Machine",
    "price": "1500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/11.jpg",
    "rating": 5

},
{
    "name": "Skipping Rope",
    "price": "100",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/10.jpg",
    "rating": 4

},
{
    "name": "Stamina Door Gyms",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/6.jpg",
    "rating": 3.5
},

{
    "name": "Bluetooth Headphone",
    "price": "200",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/12.jpg",
    "rating": 3.5
},
{
    "name": "Workout Tank Top",
    "price": "300",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/8.jpg",
    "rating": 3.5
},
{
    "name": "Gym Personal Bag",
    "price": "150",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/3.jpg",
    "rating": 3.5
},
{
    "name": "Water Bottle",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/4.jpg",
    "rating": 3.5
},



]

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Loader />
      <Header />
      
      <section className="shopCon pt-[4rem]">
        <figure className="img relative">
          <div className="bg-black z-20 w-full inset-0 absolute opacity-80"></div>
          <img src={imageUrl} className='w-full h-[270px] object-cover' alt="" />
          <div className="z-30 w-full inset-0 absolute">
            <section className="desc text-center pt-[4rem] px-5">
              <h1 className='text-[2rem] text-yellow-500 text-center font-bold uppercase'>
                <span className='mx-1 text-slate-100'>OUR</span>PRODUCTS
              </h1>
              <p className='text-white'>We have very professional and expert Instructor and they can very important to maintain our health luptas sit fugit, sed quia cuuntur magni dolores some products</p>
            </section>
          </div>
        </figure>

        <section className="shop grid grid-cols-2">
          {ExercItems.map((shop, idx) => (
            <section key={idx} className="shopCon border p-2 shadow rounded-md">
              <img src={shop.img} alt="" />
              <p className='my-1'>{shop.name.substring(0, 15)}...</p>
              <span className='flex justify-between w-full py-2'>
                <p className='font-bold'>${shop.price}</p>
                <button
                  onClick={() => handleAddToCart(shop)}
                  className="bg-yellow-500 w-[30%] flex justify-center items-center text-white rounded-[4px] h-[1.5rem]"
                >
                  <FaShoppingCart className="ml-2" />
                </button>
              </span>
            </section>
          ))}
        </section>
      </section>

      <Footer />
    </>
  );
};

export default Shop;