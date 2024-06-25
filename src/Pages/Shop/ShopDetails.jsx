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
            "rating": 3.2,
            "description": "Hand Dumble is a versatile gym accessory used for strength training exercises. It helps in building muscle and enhancing grip strength."
        },
        {
            "name": "Fitness Slam Ball",
            "price": "450",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/2.jpg",
            "rating": 5,
            "description": "Fitness Slam Ball is perfect for explosive workout routines. It allows you to perform slams, throws, and other dynamic movements."
        },
        {
            "name": "Pushup Stands",
            "price": "250",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/7.jpg",
            "rating": 3.5,
            "description": "Pushup Stands elevate your hands during push-up exercises, providing a deeper range of motion and reducing wrist strain."
        },
        {
            "name": "Ab Roller",
            "price": "550",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/9.jpg",
            "rating": 3,
            "description": "Ab Roller helps in strengthening the core muscles, especially the abdominal muscles. It is effective for improving stability and balance."
        },
        {
            "name": "Mind Reader Kettlebell",
            "price": "360",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/5.jpg",
            "rating": 2,
            "description": "Mind Reader Kettlebell is a versatile fitness tool for strength and cardio workouts. It allows for swings, lifts, and other dynamic exercises."
        },
        {
            "name": "Cycling Machine",
            "price": "1500",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/11.jpg",
            "rating": 5,
            "description": "Cycling Machine provides a low-impact cardiovascular workout. It simulates outdoor cycling and helps in improving leg strength and endurance."
        },
        {
            "name": "Skipping Rope",
            "price": "100",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/10.jpg",
            "rating": 4,
            "description": "Skipping Rope is a classic exercise tool for cardiovascular fitness and coordination. It is portable and suitable for various fitness levels."
        },
        {
            "name": "Stamina Door Gyms",
            "price": "500",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/6.jpg",
            "rating": 3.5,
            "description": "Stamina Door Gyms are versatile fitness equipment for home workouts. They allow for various upper body exercises like pull-ups and chin-ups."
        },
        {
            "name": "Bluetooth Headphone",
            "price": "200",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/12.jpg",
            "rating": 3.5,
            "description": "Bluetooth Headphones provide wireless audio for workouts, allowing you to enjoy music without the hassle of tangled wires."
        },
        {
            "name": "Workout Tank Top",
            "price": "300",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/8.jpg",
            "rating": 3.5,
            "description": "Workout Tank Tops are comfortable apparel for gym workouts. They are breathable and provide freedom of movement during exercises."
        },
        {
            "name": "Gym Personal Bag",
            "price": "150",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/3.jpg",
            "rating": 3.5,
            "description": "Gym Personal Bags are designed to carry gym essentials like clothes, shoes, and water bottles. They come with compartments for organized storage."
        },
        {
            "name": "Water Bottle",
            "price": "500",
            "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/4.jpg",
            "rating": 3.5,
            "description": "Water Bottles are essential for staying hydrated during workouts. They are durable and designed to fit in most cup holders."
        }
    ];
    


    const {id} = useParams();

    const shop = ExercItems.find(item => item.name === id )



  return (
    <>

    <Loader />

    <Header />


<main className='pt-[5rem] px-4  pb-[2rem]'>

    <section className="contoller md:flex md:my-8 md:justify-center md:px-[10rem] ">

    <section className="con md:shadow md:rounded-[10px] md:border md:w-[60%] md:p-4">


<Link to="/shop" className=' bg-yellow-5 my-3 shadow border border-yellow-500 w-[2rem] h-[2rem] 
        rounded-full flex justify-center items-center'>  <IoReturnUpBack /></Link>
        
        <figure className="imgCont  w-full ">

      <img src={shop.img} alt={shop.name} 
      className=' w-full h-[300px] md:h-[400px] object-cover' />
        </figure>

        <figcaption className="imgDesc">

      <h1 className='text-[25px] font-semibold'>{shop.name}</h1>
      <p className='font-bold text-yellow-500 text-[18px]'>Price: ${shop.price}</p>
      <p>Rating: {shop.rating}</p>
      <p className='mt-2'>{shop.description}</p>

      <div onClick={()=> handletoCart(shop) } className="btn mt-4">
        <button className="add bg-yellow-500 w-full p-2 text-slate-100 rounded-[5px] cursor-pointer">Add to Cart</button>
      </div>
        </figcaption>
      </section>
    </section>
    </main>
    <Footer />
    </>
  )
}

export default ShopDetails