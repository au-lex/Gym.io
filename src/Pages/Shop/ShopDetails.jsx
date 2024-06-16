import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../../Component/Loader';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import { IoReturnUpBack } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';

const ShopDetails = () => {

    const dispatch = useDispatch();

    const handletoCart = (items) => {
        dispatch(addToCart(items))
    }

    const [ShopDetails, SetShopDetails] = useState([]);


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


    const {id} = useParams();

    const shop = ExercItems.find(item => item.name === id )



  return (
    <>

    <Loader />

    <Header />


<main className='pt-[5rem] px-4 pb-[2rem]'>
<Link to="/shop" className=' bg-yellow-5 my-3 shadow border border-yellow-500 w-[2rem] h-[2rem] 
        rounded-full flex justify-center items-center'>  <IoReturnUpBack /></Link>
        
        <figure className="imgCont  w-full ">

      <img src={shop.img} alt={shop.name} 
      className=' w-full h-[300px] object-cover' />
        </figure>

        <figcaption className="imgDesc">

      <h1 className='text-[25px] font-semibold'>{shop.name}</h1>
      <p className='font-bold text-yellow-500 text-[18px]'>Price: ${shop.price}</p>
      <p>Rating: {shop.rating}</p>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores explicabo 
        beatae. Quo enim voluptatibus alias cum eum aut.
         Eligendi sit ipsam reprehenderit, autem esse officia tempora quisquam eius minima?</p>

      <div onClick={()=> handletoCart(shop) } className="btn mt-4">
        <button className="add bg-yellow-500 w-full p-2 text-slate-100 rounded-[5px] cursor-pointer">Add to Cart</button>
      </div>
        </figcaption>
    </main>

    <Footer />
    </>
  )
}

export default ShopDetails