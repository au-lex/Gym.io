import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';



const StarRating = ({ rating }) => {
    // Round the rating to nearest 0.5
    const roundedRating = Math.round(rating * 2) / 2;
    // Create an array of stars based on rating
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(<FaStar key={i} className="text-yellow-500 text-[10px]" />);
      } else if (i === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 text-[10px]" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500 text-[10px]" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };


const Shop = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
    
const ExercItems = [

    {
        "name": "Hand Dumble",
        "price": "500",
        "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/1.jpg",
        "rating": 3.2
    
    },

{
    "name": "Fitness Slam Ball",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/2.jpg",
    "rating": 5

},
{
    "name": "Pushup Stands",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/7.jpg",
    "rating": 3.5

},
{
    "name": "Ab Roller",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/9.jpg",
    "rating": 3

},
{
    "name": "Mind Reader Kettlebell",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/5.jpg",
    "rating": 2

},
{
    "name": "Cycling Machine",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/11.jpg",
    "rating": 5

},
{
    "name": "Skipping Rope",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/10.jpg",
    "rating": 4

},
{
    "name": "Stamina Door Gyms",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/6.jpg",
    "rating": 3.5
},



]


  return (
    <>
    
    <section className="shopCont px-4 mt-[4rem]">

<h1 className='text-[2rem]    text-yellow-500 font-bold uppercase s'>
          <span className='mx-1 text-slate-900'>GYM  </span> products <br /> 
            </h1>


<p className='mb-4'>We have very professional and exprt Instructor and they can very important to maintain
our health luptas sit fugit, sed quia cuuntur magni dolores some products</p>
    
    <section className="shop grid grid-cols-2">
        {ExercItems.map((shop,idx)=> (
<section className="shopCon border p-2 shaow rounded-md ">
    <img src={shop.img} alt="" />
    <StarRating rating={shop.rating}  />
    <p className='my-1'> {shop.name.substring(0,15)}...</p>

    <span className='flex justify-between w-full py-2'>

    <p className='font-bold'>${shop.price}</p>

  

    <button  onClick={() => handleAddToCart(shop)}  className=" bg-yellow-500  w-[30%] flex justify-center items-center text-white rounded-[4px] h-[1.5rem]">
                 <FaShoppingCart className="ml-2 " />
              </button>
    
    </span>
</section>

        ))}
    </section>
    </section>
    </>
  )
}

export default Shop